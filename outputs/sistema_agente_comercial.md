# Sistema de Agente Comercial - Cainiao Iberia

## Arquitectura del Sistema

El sistema consta de tres componentes principales:

### 1. CRM en AliDocs (Base de Datos)
- **Base ID:** AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3
- **4 Tablas:**
  - **Leads** (2WvQMwT): Información de prospectos, etapas, puntuación
  - **Actividad** (8mWSwem): Registro de interacciones con leads
  - **Exclusiones** (sZWGlKH): Empresas no contactables
  - **Semanal** (NptFyIL): Métricas y reportes semanales

### 2. Grupo DingTalk (Comunicación)
- **Nombre:** LOCAL BD INTERNAL V2
- **Group ID:** cid0a5gCcYTpVdA6vZFKYJYiw==
- **Participantes:** José Tralci (Manager), Sergio Magán, Jorge Daniel Arango, Agente

### 3. Tarea Programada QoderWork (Automatización)
- **Nombre:** Agente Comercial - Poll DingTalk Activities
- **Frecuencia:** Cada 10 minutos, Lunes a Viernes, 8:00-18:00 (Madrid)
- **Función:** Escucha mensajes en DingTalk, procesa actividades, actualiza CRM

---

## Flujo de Trabajo Diario

### Para el Manager (José Tralci)

**8:30 AM - Inicio del día:**
1. El agente busca 10 leads nuevos según ICP
2. Distribuye equitativamente entre Sergio (5) y Jorge (5)
3. Envía email a j.tralci@cainiao.com con resumen
4. Notifica al grupo DingTalk con asignaciones

**Durante el día:**
- El agente monitorea el grupo DingTalk cada 10 minutos
- Cuando Sergio o Jorge reportan actividad, el agente:
  * Parsea el mensaje en lenguaje natural
  * Registra la actividad en tabla "Actividad"
  * Actualiza etapa del lead en tabla "Leads"
  * Envía confirmación al grupo

**Viernes - Informe semanal:**
- El agente genera reporte con métricas de la semana
- Envía a José por email con link al CRM

### Para los Comerciales (Sergio y Jorge)

**Contactar leads (primeras 48h):**
1. Revisar email diario con leads asignados
2. Contactar vía canal recomendado (LinkedIn o teléfono)
3. Registrar actividad en DingTalk (ver ejemplos abajo)

**Registrar actividad:**
- Escribir mensaje natural en el grupo DingTalk
- El agente procesa automáticamente y actualiza CRM
- Recibir confirmación del agente

**Ejemplos de mensajes:**

```
Llamé a Kave Home, hablé con el director de operaciones, interesado. Seguimiento el jueves para enviar propuesta.
```

```
Envié propuesta a Sklum, pendiente revisión.
```

```
Deporvillage no contesta, reintentar en 3 días.
```

```
Reunión con Westwing, presentaron problemas con entregas actuales. Interesados en piloto.
```

```
Makeup España rechazó, dicen que tienen contrato vigente hasta diciembre.
```

El agente entiende lenguaje natural y extrae:
- **Empresa:** Kave Home, Sklum, Deporvillage, etc.
- **Canal:** Llamada, LinkedIn, Email, Reunión, Visita
- **Resultado:** Conversación con decisor, Propuesta enviada, No contesta, Reunión agendada, Rechazo, etc.
- **Próximo paso:** Seguimiento, Enviar propuesta, etc.

---

## Etapas del Lead

| Etapa | Significado | Acción requerida |
|-------|-------------|------------------|
| **Asignado** | Lead nuevo, aún no contactado | Contactar en 48h |
| **Intento** | Se intentó contactar pero no hubo respuesta | Reintentar en 3-5 días |
| **Conversación** | Se habló con alguien pero no es el decisor | Identificar decisor y agendar llamada |
| **Cualificado** | Decisor identificado + interés + envíos/día reales | Agendar reunión o enviar propuesta |
| **Reunión-Propuesta** | Reunión realizada o propuesta enviada | Seguimiento en 7 días |
| **Piloto-Cliente** | Piloto en marcha o cliente cerrado | Onboarding y seguimiento |
| **Perdido** | No encaja o rechazó | Indicar motivo de pérdida |
| **Sin gestionar** | 5 días sin actividad | Solo José puede reasignar |

---

## Reglas de Negocio

### Capacidad máxima
- Cada comercial puede tener máximo **15 leads** en etapa "Asignado" o "Intento"
- Si llegas a 15, el agente no te asignará nuevos hasta que cierres o pierdas algunos

### Seguimientos vencidos
- Si la "Fecha próximo paso" es hoy o anterior, el agente te lo recordará
- Si pasas 5 días laborables sin actividad en un lead "Asignado", el agente lo pasará a "Sin gestionar"

### Señales de dolor
- Presta atención a leads con señal de dolor = "Sí"
- Tienen problemas públicos en Trustpilot, Google o Miravia
- Usa esto como argumento de venta

---

## Métricas Clave

### Valor anual estimado
```
Valor anual = Envíos/día × 2,3€ × 250 días laborables
```

### Tasa de conversión objetivo
- De Asignado a Conversación: >60%
- De Conversación a Cualificado: >40%
- De Cualificado a Reunión-Propuesta: >50%
- De Reunión-Propuesta a Piloto-Cliente: >30%

### Actividad objetivo
- Contactar el 100% de leads nuevos en 48h
- Mantener menos de 5 seguimientos vencidos por comercial
- Actualizar CRM al menos 3 veces por semana

---

## Solución de Problemas

### El agente no responde a mis mensajes en DingTalk
- Verifica que estás escribiendo en el grupo correcto: "LOCAL BD INTERNAL V2"
- Asegúrate de mencionar el nombre de la empresa
- Si el problema persiste, contacta a José Tralci

### El agente no entendió mi mensaje
- Sé específico con el nombre de la empresa
- Usa palabras clave: "llamé", "reunión", "propuesta", "rechazo", etc.
- Ejemplo claro: "Llamé a [Empresa], [resultado], [próximo paso]"

### Quiero registrar actividad manualmente en CRM
- Ve a la pestaña "Actividad"
- Añade una fila con: Fecha, ID_lead, Empresa, Comercial, Canal, Resultado, Nota, Próximo paso

### Cómo ver mis leads asignados
- En el CRM, pestaña "Leads"
- Filtra por tu nombre en la columna "Comercial"
- Ordena por "Fecha próxima acción" para ver seguimientos pendientes

---

## Comandos DWS Útiles

### Ver mensajes del grupo
```bash
dws chat message list --group "cid0a5gCcYTpVdA6vZFKYJYiw==" --time "2026-10-27 00:00:00" --direction newer --format json
```

### Enviar mensaje al grupo
```bash
dws chat message send --group "cid0a5gCcYTpVdA6vZFKYJYiw==" --text "Tu mensaje aquí"
```

### Buscar lead en CRM
```bash
dws aitable record query --base-id AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3 --table-id 2WvQMwT --filter "Empresa = 'Kave Home'" --format json
```

### Crear actividad en CRM
```bash
dws aitable record create --base-id AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3 --table-id 8mWSwem --records-file activity.json --format json
```

### Actualizar etapa de lead
```bash
dws aitable record update --base-id AR4GpnMqJzKpOoklFbdPYG4K8Ke0xjE3 --table-id 2WvQMwT --records-file update.json --format json
```

---

## Contacto y Soporte

### Con el Agente
- **DingTalk:** Grupo "LOCAL BD INTERNAL V2"
- **Email:** j.tralci@cainiao.com (solo para José)

### Escalación
- Si el agente no responde después de 30 minutos, contacta a José
- Si hay errores en el CRM, notifica al grupo para corrección manual
- Para cambios en el proceso, solo José puede modificar las reglas

---

## Próximas Mejoras

1. **Integración con calendario:** Agendar reuniones automáticamente
2. **Recordatorios inteligentes:** Notificar seguimientos vencidos por mensaje directo
3. **Análisis predictivo:** Identificar leads con mayor probabilidad de conversión
4. **Reportes automáticos:** Generar informes semanales sin intervención manual
5. **Chatbot interactivo:** Responder preguntas de los comerciales en tiempo real

---

**Última actualización:** 27/10/2026  
**Versión:** 1.0  
**Autor:** Agente Comercial Cainiao Iberia (QoderWork)
