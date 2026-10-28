const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const QUEUE_FILE = path.join(__dirname, 'activity_queue.json');
const BASE_ID = 'AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3';
const TABLE_ID = '8mWSwem';
const LEADS_TABLE_ID = '2WvQMwT';

// Activity table field IDs
const ACTIVITY_FIELDS = {
    fecha_proximo: 'dr044fY',
    proximo_paso: 'v8YQMpu',
    empresa: 'w5buqxh',
    comercial: 'sj1t51y',
    id_lead: 'nuS5r84',
    canal: 'aGMrZH5',
    fecha: 'RoDpKB1',
    nota: '3lOFjTR',
    resultado: 'H3v3u5Y'
};

// Leads table field IDs
const LEADS_FIELDS = {
    nombre: 'jELV4xU',
    web: 'YRhWVgt',
    categoria: 'UBmKoOZ',
    fuente: 'asFXwaL',
    contacto: 'au6I9KJ',
    comercial: 'X7RrUI2',
    etapa: 'HDpJXUF',
    fecha_asignacion: 'rVAHM2r',
    fecha_ultima_actividad: 'TgDWDQJ',
    proximo_paso: 'b63Kewk',
    lead_id: 'uWeq8Gd'
};

function processQueue() {
    console.log('=== Processing Activity Queue ===');
    console.log(`Queue file: ${QUEUE_FILE}`);

    // Check if queue file exists
    if (!fs.existsSync(QUEUE_FILE)) {
        console.log('[OK] No queue file found. Nothing to process.');
        return;
    }

    // Read queue
    const queueData = fs.readFileSync(QUEUE_FILE, 'utf8');
    let queue = JSON.parse(queueData);

    console.log(`Found ${queue.length} activities in queue`);

    // Filter unprocessed activities
    const unprocessed = queue.filter(item => !item.processed);

    if (unprocessed.length === 0) {
        console.log('[OK] All activities already processed.');
        return;
    }

    console.log(`Processing ${unprocessed.length} unprocessed activities...`);

    let successCount = 0;
    let errorCount = 0;

    unprocessed.forEach((activity, index) => {
        try {
            console.log(`\n[${index + 1}/${unprocessed.length}] Processing: ${activity.comercial} - ${activity.empresa}`);

            let leadId = null;

            // If new company, create lead first
            if (activity.es_nueva_empresa && activity.nueva_empresa) {
                console.log('  → Creating new lead in CRM...');
                leadId = createNewLead(activity);
                
                if (leadId) {
                    console.log(`  ✓ Lead created with ID: ${leadId}`);
                } else {
                    console.log('  ⚠ Lead creation failed, continuing with activity only');
                }
            }

            // Prepare CRM activity record
            const cells = {};
            cells[ACTIVITY_FIELDS.comercial] = activity.comercial;
            cells[ACTIVITY_FIELDS.empresa] = activity.empresa;
            cells[ACTIVITY_FIELDS.canal] = activity.canal;
            cells[ACTIVITY_FIELDS.resultado] = activity.resultado;
            cells[ACTIVITY_FIELDS.nota] = { markdown: activity.nota };
            cells[ACTIVITY_FIELDS.fecha] = activity.fecha_registro.split('T')[0];

            if (activity.proximo_paso) {
                cells[ACTIVITY_FIELDS.proximo_paso] = activity.proximo_paso;
            }

            if (activity.fecha_proximo) {
                cells[ACTIVITY_FIELDS.fecha_proximo] = activity.fecha_proximo;
            }

            // Link to lead if created
            if (leadId) {
                cells[ACTIVITY_FIELDS.id_lead] = leadId;
            }

            // Create temp file for record
            const tempFile = path.join(__dirname, 'temp_activity_record.json');
            const recordData = JSON.stringify([{ cells }]);
            fs.writeFileSync(tempFile, recordData);

            // Execute DWS command
            const tempFilePosix = tempFile.replace(/\\/g, '/');
            const dwsCommand = `dws aitable record create --base-id ${BASE_ID} --table-id ${TABLE_ID} --records-file "${tempFilePosix}" --format json`;
            const output = execSync(dwsCommand, { 
                cwd: __dirname, 
                maxBuffer: 10 * 1024 * 1024,
                shell: 'bash'
            });

            const result = JSON.parse(output.toString());

            // Clean up temp file
            fs.unlinkSync(tempFile);

            if (result.success) {
                console.log(`[OK] Activity created successfully`);
                activity.processed = true;
                activity.processedAt = new Date().toISOString();
                activity.crmRecordId = result.data?.newRecordIds?.[0] || null;
                activity.leadId = leadId;
                successCount++;

                // Send DingTalk notification
                sendDingTalkNotification(activity);
            } else {
                console.log(`[ERROR] Failed to create activity: ${result.message || 'Unknown error'}`);
                errorCount++;
            }

        } catch (error) {
            console.log(`[ERROR] Exception processing activity: ${error.message}`);
            errorCount++;
        }
    });

    // Save updated queue
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));

    console.log('\n=== Queue Processing Complete ===');
    console.log(`Success: ${successCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Total processed: ${successCount + errorCount}`);
}

function createNewLead(activity) {
    try {
        const nuevaEmpresa = activity.nueva_empresa;
        const today = new Date().toISOString().split('T')[0];
        
        // Generate lead ID (L-XXXX format)
        const leadNumber = Math.floor(Math.random() * 9000) + 1000;
        const leadId = `L-${leadNumber}`;

        const cells = {};
        cells[LEADS_FIELDS.nombre] = nuevaEmpresa.nombre;
        cells[LEADS_FIELDS.comercial] = activity.comercial;
        cells[LEADS_FIELDS.etapa] = { id: 'mpVX6bNERB', name: 'Asignado' };
        cells[LEADS_FIELDS.fecha_asignacion] = today;
        cells[LEADS_FIELDS.fecha_ultima_actividad] = today;
        cells[LEADS_FIELDS.lead_id] = leadId;
        
        if (nuevaEmpresa.web) {
            cells[LEADS_FIELDS.web] = { link: nuevaEmpresa.web, text: nuevaEmpresa.web };
        }
        
        if (nuevaEmpresa.categoria) {
            cells[LEADS_FIELDS.categoria] = nuevaEmpresa.categoria;
        }
        
        if (nuevaEmpresa.fuente) {
            cells[LEADS_FIELDS.fuente] = nuevaEmpresa.fuente;
        }
        
        if (nuevaEmpresa.contacto) {
            cells[LEADS_FIELDS.contacto] = nuevaEmpresa.contacto;
        }
        
        if (activity.proximo_paso) {
            cells[LEADS_FIELDS.proximo_paso] = activity.proximo_paso;
        }

        // Create temp file for lead record
        const tempFile = path.join(__dirname, 'temp_lead_record.json');
        const recordData = JSON.stringify([{ cells }]);
        fs.writeFileSync(tempFile, recordData);

        // Execute DWS command to create lead
        const tempFilePosix = tempFile.replace(/\\/g, '/');
        const dwsCommand = `dws aitable record create --base-id ${BASE_ID} --table-id ${LEADS_TABLE_ID} --records-file "${tempFilePosix}" --format json`;
        const output = execSync(dwsCommand, { 
            cwd: __dirname, 
            maxBuffer: 10 * 1024 * 1024,
            shell: 'bash'
        });

        const result = JSON.parse(output.toString());

        // Clean up temp file
        fs.unlinkSync(tempFile);

        if (result.success) {
            return leadId;
        } else {
            console.log(`[ERROR] Failed to create lead: ${result.message || 'Unknown error'}`);
            return null;
        }

    } catch (error) {
        console.log(`[ERROR] Exception creating lead: ${error.message}`);
        return null;
    }
}

function sendDingTalkNotification(activity) {
    try {
        let notificationMessage = `✅ NUEVA ACTIVIDAD REGISTRADA\n` +
            `Comercial: ${activity.comercial}\n` +
            `Empresa: ${activity.empresa}\n` +
            `Canal: ${activity.canal}\n` +
            `Resultado: ${activity.resultado}\n` +
            `Nota: ${activity.nota.substring(0, 100)}${activity.nota.length > 100 ? '...' : ''}\n` +
            (activity.proximo_paso ? `Próximo paso: ${activity.proximo_paso}\n` : '') +
            (activity.fecha_proximo ? `Fecha próximo paso: ${activity.fecha_proximo}\n` : '') +
            `Fecha registro: ${new Date(activity.fecha_registro).toLocaleString('es-ES')}`;

        if (activity.es_nueva_empresa) {
            notificationMessage = `🆕 NUEVO LEAD + ACTIVIDAD REGISTRADA\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `Comercial: ${activity.comercial}\n` +
                `🏢 Nueva Empresa: ${activity.empresa}\n` +
                (activity.nueva_empresa?.web ? `Web: ${activity.nueva_empresa.web}\n` : '') +
                (activity.nueva_empresa?.categoria ? `Categoría: ${activity.nueva_empresa.categoria}\n` : '') +
                (activity.nueva_empresa?.fuente ? `Fuente: ${activity.nueva_empresa.fuente}\n` : '') +
                `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `Canal: ${activity.canal}\n` +
                `Resultado: ${activity.resultado}\n` +
                `Nota: ${activity.nota.substring(0, 100)}${activity.nota.length > 100 ? '...' : ''}\n` +
                (activity.proximo_paso ? `Próximo paso: ${activity.proximo_paso}\n` : '') +
                (activity.fecha_proximo ? `Fecha próximo paso: ${activity.fecha_proximo}\n` : '') +
                `Fecha registro: ${new Date(activity.fecha_registro).toLocaleString('es-ES')}`;
        }

        const dingtalkCommand = `dws chat message send --group cid0a5gCcYTpVdA6vZFKYJYiw== --text "${notificationMessage.replace(/"/g, '\\"')}"`;
        
        execSync(dingtalkCommand, { 
            cwd: __dirname, 
            maxBuffer: 10 * 1024 * 1024,
            shell: 'bash'
        });

        console.log(`[OK] DingTalk notification sent`);
    } catch (error) {
        console.log(`[WARN] Failed to send DingTalk notification: ${error.message}`);
    }
}

// Run processor
processQueue();
