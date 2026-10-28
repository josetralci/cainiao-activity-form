# Solución Implementada - Agente Comercial DingTalk

## Resumen Ejecutivo

Se ha implementado un sistema automatizado que permite a los comerciales (Sergio Magán y Jorge Daniel Arango) registrar actividades de ventas directamente desde el grupo DingTalk "LOCAL BD INTERNAL V2", sin necesidad de acceder a QoderWork.

---

## Componentes del Sistema

### 1. Tarea Programada QoderWork
- **ID:** 0ad771c3-0d16-45ca-a047-6163bb1339a3
- **Nombre:** Agente Comercial - Poll DingTalk Activities
- **Frecuencia:** Cada 10 minutos, Lunes a Viernes, 8:00-18:00 (hora Madrid)
- **Función:** 
  - Poll mensajes del grupo DingTalk
  - Parsear lenguaje natural de Sergio y Jorge
  - Registrar actividades en CRM (tabla "Actividad")
  - Actualizar etapas de leads (tabla "Leads")
  - Enviar confirmación al grupo

### 2. CRM en AliDocs
- **Base:** CRM Leads Cainiao (AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3)
- **Tablas:**
  - Leads (2WvQMwT): 10 leads iniciales con field IDs mapeados
  - Actividad (8mWSwem): Registro de interacciones
  - Exclusiones (sZWGlKH): 115 empresas no contactables
  - Semanal (NptFyIL): Métricas semanales

### 3. Grupo DingTalk
- **Nombre:** LOCAL BD INTERNAL V2
- **Group ID:** cid0a5gCcYTpVdA6vZFKYJYiw==
- **Participantes:** José Tralci, Sergio Magán, Jorge Daniel Arango

---

## Flujo de Trabajo

### Para Sergio y Jorge (Comerciales)

**Paso 1: Contactar lead**
```
Llamé a Kave Home, hablé con el director de operaciones, interesado. Seguimiento el jueves para enviar propuesta.
```

**Paso 2: El agente procesa automáticamente**
- Parsea el mensaje
- Identifica: Empresa (Kave Home), Canal (Llamada), Resultado (Conversación con decisor)
- Crea registro en tabla "Actividad"
- Actualiza etapa del lead a "Conversación"
- Actualiza próximo paso a "Enviar propuesta"

**Paso 3: Confirmación**
```
@Sergio Magán Registro de actividad para Kave Home completado en CRM.
```

### Para José (Manager)

**Supervisión diaria:**
- Revisar email con resumen de leads asignados
- Monitorear grupo DingTalk para ver confirmaciones
- Verificar CRM actualizado automáticamente

**Informe semanal:**
- Cada viernes el agente genera reporte con métricas
- Envío automático por email

---

## Ejemplos de Uso

### Ejemplo 1: Llamada exitosa
**Mensaje de Sergio:**
```
Llamé a Sklum, hablé con el responsable de logística, muy interesado en optimizar entregas de muebles. Quiere propuesta para 600 envíos/día.
```

**Acción del agente:**
- Crea actividad con: Canal=Llamada, Resultado=Conversación con decisor
- Actualiza lead L-0002 (Sklum) a etapa "Conversación"
- Actualiza próximo paso a "Enviar propuesta"
- Envía confirmación al grupo

### Ejemplo 2: Sin respuesta
**Mensaje de Jorge:**
```
Deporvillage no contesta, reintentar en 3 días.
```

**Acción del agente:**
- Crea actividad con: Canal=Llamada, Resultado=No contesta
- Actualiza lead L-0003 (Deporvillage) a etapa "Intento"
- Actualiza próximo paso a "Reintentar en 3 días"
- Envía confirmación al grupo

### Ejemplo 3: Reunión agendada
**Mensaje de Sergio:**
```
Reunión con Westwing el próximo martes, presentaron problemas con entregas actuales. Interesados en piloto.
```

**Acción del agente:**
- Crea actividad con: Canal=Reunión, Resultado=Reunión agendada
- Actualiza lead L-0004 (Westwing) a etapa "Reunión-Propuesta"
- Actualiza próximo paso a "Preparar propuesta"
- Envía confirmación al grupo

### Ejemplo 4: Rechazo
**Mensaje de Jorge:**
```
Makeup España rechazó, dicen que tienen contrato vigente hasta diciembre.
```

**Acción del agente:**
- Crea actividad con: Resultado=Rechazo
- Actualiza lead L-0007 (Makeup España) a etapa "Perdido"
- Registra motivo: "Contrato vigente"
- Envía confirmación al grupo

---

## Ventajas del Sistema

### Para los Comerciales
1. **Sin acceso a QoderWork:** Solo necesitan DingTalk y CRM
2. **Lenguaje natural:** Escriben como hablarían normalmente
3. **Confirmación inmediata:** Saben que el registro fue exitoso
4. **Menos carga administrativa:** No tienen que llenar formularios manualmente

### Para el Manager
1. **Visibilidad en tiempo real:** Ve todas las actividades en el grupo
2. **CRM actualizado:** Datos consistentes y actualizados automáticamente
3. **Métricas automáticas:** Reportes semanales sin intervención manual
4. **Escalabilidad:** El sistema puede manejar más comerciales sin cambios

### Para la Empresa
1. **Eficiencia operativa:** Automatización de tareas repetitivas
2. **Calidad de datos:** Registros consistentes y completos
3. **Trazabilidad:** Historial completo de interacciones
4. **ROI:** Reducción de tiempo administrativo en ~2h/día por comercial

---

## Limitaciones y Consideraciones

### Limitaciones Técnicas
1. **Polling cada 10 minutos:** No es tiempo real, pero suficiente para el flujo de trabajo
2. **Solo horario laboral:** 8:00-18:00 L-V (configurable)
3. **Reconocimiento de empresas:** Solo las 10 leads iniciales (expandible)
4. **Parseo de lenguaje natural:** Puede fallar con mensajes muy ambiguos

### Consideraciones Operativas
1. **Los comerciales deben mencionar la empresa:** El agente necesita identificar el lead
2. **Palabras clave ayudan:** "llamé", "reunión", "propuesta", "rechazo" mejoran el parseo
3. **Confirmación manual:** Si el agente no entiende, pide clarificación
4. **Supervisión humana:** José puede corregir registros erróneos en el CRM

---

## Próximos Pasos

### Inmediatos (Esta semana)
1. **Probar con Sergio y Jorge:** Explicar el flujo y pedir feedback
2. **Monitorear tareas programadas:** Verificar que se ejecutan correctamente
3. **Ajustar parseo:** Mejorar reconocimiento de patrones según uso real

### Corto plazo (Próximas 2 semanas)
1. **Expandir leads:** Añadir más empresas al mapeo
2. **Recordatorios automáticos:** Notificar seguimientos vencidos por mensaje directo
3. **Dashboard en tiempo real:** Crear vista de pipeline actualizado automáticamente

### Mediano plazo (Próximo mes)
1. **Integración con calendario:** Agendar reuniones automáticamente
2. **Análisis predictivo:** Identificar leads con mayor probabilidad de conversión
3. **Chatbot interactivo:** Responder preguntas de los comerciales en tiempo real

---

## Comandos de Mantenimiento

### Ver estado de tarea programada
```bash
dws cron list
```

### Ejecutar tarea manualmente (para pruebas)
```bash
dws cron run --job-id 0ad771c3-0d16-45ca-a047-6163bb1339a3
```

### Ver mensajes del grupo (últimos 15 min)
```bash
dws chat message list --group "cid0a5gCcYTpVdA6vZFKYJYiw==" --time "2026-10-27 12:00:00" --direction newer --format json
```

### Ver actividades registradas hoy
```bash
dws aitable record query --base-id AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3 --table-id 8mWSwem --filter "Fecha = '2026-10-27'" --format json
```

---

## Soporte y Troubleshooting

### Problema: El agente no responde a mensajes
**Solución:**
1. Verificar que el mensaje menciona el nombre de la empresa
2. Confirmar que está en el grupo correcto: "LOCAL BD INTERNAL V2"
3. Revisar que la tarea programada está activa: `dws cron list`
4. Si persiste, ejecutar manualmente: `dws cron run --job-id 0ad771c3-0d16-45ca-a047-6163bb1339a3`

### Problema: El agente entendió mal el mensaje
**Solución:**
1. Corregir manualmente en el CRM (tabla "Actividad")
2. Enviar mensaje más específico al grupo
3. Ejemplo: "Llamé a Kave Home, resultado: no contesta, próximo paso: reintentar en 3 días"

### Problema: Quiero cambiar la frecuencia de polling
**Solución:**
1. Editar tarea programada en QoderWork
2. Cambiar expresión cron (actual: */10 8-18 * * 1-5)
3. Ejemplo para cada 5 minutos: */5 8-18 * * 1-5

---

## Contacto

**Desarrollado por:** Agente Comercial Cainiao Iberia (QoderWork)  
**Fecha:** 27/10/2026  
**Versión:** 1.0  
**Soporte:** j.tralci@cainiao.com

---

## Anexos

### A. Field IDs del CRM
**Tabla Leads (2WvQMwT):**
- ID: uWeq8Gd
- Empresa: jELV4xU
- Etapa: HDpJXUF
- Fecha_ultima_actividad: TgDWDQJ
- Proximo_paso: b63Kewk
- Fecha_proximo_paso: rVAHM2r

**Tabla Actividad (8mWSwem):**
- Fecha: RoDpKB1
- ID_lead: nuS5r84
- Empresa: w5buqxh
- Comercial: sj1t51y
- Canal: aGMrZH5
- Resultado: H3v3u5Y
- Nota: 3lOFjTR
- Proximo_paso: v8YQMpu
- Fecha_proximo_paso: dr044fY

### B. Mapeo de Empresas a Lead IDs
- Kave Home: L-0001
- Sklum: L-0002
- Deporvillage: L-0003
- Westwing: L-0004
- Lookfantastic: L-0005
- La Oca: L-0006
- Makeup España: L-0007
- Juguetes Panre: L-0008
- Hiper Montigalá: L-0009
- Casa Viva: L-0010

### C. Mapeo de Resultados a Etapas
- No contesta → Intento
- Contactado sin decisor → Conversación
- Conversación con decisor → Conversación
- Reunión agendada → Reunión-Propuesta
- Propuesta enviada → Reunión-Propuesta
- Piloto iniciado → Piloto-Cliente
- Cliente cerrado → Piloto-Cliente
- Rechazo → Perdido
