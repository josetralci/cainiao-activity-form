const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'outputs', 'formulario_actividad.html'));
});

// POST endpoint to register activity
app.post('/api/register-activity', async (req, res) => {
    console.log('POST /api/register-activity called');
    console.log('Request body:', req.body);
    try {
        const { comercial, empresa, canal, resultado, nota, proximo_paso, fecha_proximo } = req.body;

        // Validate required fields
        if (!comercial || !empresa || !canal || !resultado || !nota) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos obligatorios'
            });
        }

        // Prepare activity data
        const activityData = {
            comercial,
            empresa,
            canal,
            resultado,
            nota,
            proximo_paso: proximo_paso || '',
            fecha_proximo: fecha_proximo || '',
            fecha_registro: new Date().toISOString(),
            processed: false
        };

        // Read existing queue or create new
        const queueFile = path.join(__dirname, 'activity_queue.json');
        let queue = [];
        
        if (fs.existsSync(queueFile)) {
            const existingQueue = fs.readFileSync(queueFile, 'utf8');
            queue = JSON.parse(existingQueue);
        }

        // Add new activity to queue
        queue.push(activityData);

        // Save queue
        fs.writeFileSync(queueFile, JSON.stringify(queue, null, 2));

        console.log(`Activity queued: ${comercial} - ${empresa} - ${canal} - ${resultado}`);

        res.json({
            success: true,
            message: 'Actividad registrada y en cola para procesamiento',
            queueSize: queue.length
        });

    } catch (error) {
        console.error('Error registering activity:', error);
        res.status(500).json({
            success: false,
            message: 'Error al registrar la actividad',
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Form available at http://localhost:${PORT}/`);
});
