# Sistema de Mejora Continua - Agente Comercial Cainiao Iberia

## Resumen Ejecutivo

El Agente Comercial ahora cuenta con un **sistema integral de mejora continua** que analiza automáticamente los resultados de leads, ajusta el scoring dinámicamente, y genera recomendaciones de optimización basadas en datos reales.

---

## Componentes Implementados

### 1. Sistema de Feedback de Comerciales 👍/👎

**Campo en CRM**: `Valoracion` (field ID: 3cjcqB5) en tabla Leads

**Uso**:
- Sergio y Jorge pueden valorar cada lead con 👍 (positivo) o 👎 (negativo)
- El sistema analiza estas valoraciones por fuente y categoría
- Calcula tasa de aprobación automática

**Beneficio**: Identifica rápidamente qué fuentes y categorías generan mejor satisfacción del equipo comercial.

---

### 2. Análisis de Conversión por Etapa y Fuente

**Funnel de 7 etapas**:
1. Asignado
2. Intento
3. Conversación
4. Cualificado
5. Reunión-Propuesta
6. Piloto-Cliente
7. Perdido

**Métricas calculadas**:
- Tasas de conversión entre etapas
- Cuellos de botella identificados
- Rendimiento por fuente (Miravia, Tiendas propias, Mayoristas chinos, Amazon.es)
- Rendimiento por categoría (Hogar, Belleza, Deporte, Juguetes)

**Beneficio**: Permite identificar qué fuentes y categorías tienen mejor rendimiento para ajustar la estrategia.

---

### 3. Scoring Dinámico Basado en Resultados

**Sistema de pesos ajustables**:
- Pesos por fuente: 0.5x a 2.0x según tasa de conversión
- Pesos por categoría: 0.5x a 2.0x según tasa de conversión
- Recalculado automáticamente cada semana

**Recomendaciones automáticas**:
- 🔺 AUMENTAR (peso > 1.2x)
- ➖ MANTENER (peso 0.8x - 1.2x)
- 🔻 REDUCIR (peso < 0.8x)

**Beneficio**: Los leads de fuentes con mejor conversión reciben scoring más alto automáticamente.

---

### 4. Análisis Predictivo de Conversión

**Factores considerados**:
- Puntuación base del lead (0-100)
- Multiplicador de categoría
- Multiplicador de fuente
- Multiplicador de tamaño (Grande 1.3x, Mediano 1.0x, Pequeño 0.7x)

**Output**:
- Probabilidad de conversión calculada (0-100%)
- Ranking de leads por probabilidad
- Identificación de leads de alta/baja probabilidad

**Beneficio**: Permite priorizar esfuerzos en leads con mayor probabilidad de cierre.

---

### 5. Dashboard de Métricas en Tiempo Real

**Archivo**: `dashboard_comercial.html`

**Secciones**:
- Métricas generales (4 tarjetas con KPIs principales)
- Funnel de conversión visual (barras horizontales)
- Rendimiento por fuente (tabla con colores)
- Rendimiento por categoría (tabla con indicadores)
- Top 5 leads con mayor probabilidad
- Recomendaciones de la semana

**Beneficio**: Visualización clara y profesional de todos los métricos en un solo lugar.

---

### 6. A/B Testing de Ángulos de Venta

**8 ángulos probados**:
1. Optimización de cadena de suministro
2. Reducción de incidencias en entregas
3. Mejora de tiempos de entrega
4. Eficiencia logística y reducción de costes
5. Escalabilidad para crecimiento online
6. Logística estacional para picos de campaña
7. Mejora de experiencia de cliente final
8. Integración tecnológica avanzada

**Métricas**:
- Usos por ángulo
- Tasa de conversión por ángulo
- Tasa de pérdida por ángulo
- Ranking de rendimiento

**Beneficio**: Identifica qué ángulos de venta funcionan mejor para cada categoría y fuente.

---

### 7. Reporte Semanal Automático por Email

**Destinatario**: LOCAL_LEADS@list.alibaba-inc.com (José, Sergio, Jorge)

**Frecuencia**: Cada viernes a las 17:00h (Madrid)

**Formato**: HTML profesional con:
- Header con gradiente corporativo
- 4 tarjetas de métricas generales
- Gráfico de funnel de conversión
- Tablas de rendimiento por fuente y categoría
- Top 5 leads con mayor probabilidad
- 3 recomendaciones concretas
- Footer con firma automática

**Beneficio**: Reporte visual y legible que llega automáticamente a todo el equipo.

---

## Tareas Programadas

### Tarea 1: Poll de Mensajes DingTalk

**ID**: `0ad771c3-0d16-45ca-a047-6163bb1339a3`

**Frecuencia**: Cada 10 minutos, L-V de 8:00 a 18:00h

**Función**:
- Escucha mensajes del grupo "LOCAL BD INTERNAL V2"
- Parsea mensajes de Sergio y Jorge
- Crea registros de actividad en CRM
- Actualiza etapas de leads
- Envía confirmaciones al grupo

**Ejemplo de mensaje procesado**:
```
"Llamé a Kave Home, hablé con el director de operaciones, interesado. 
Seguimiento el jueves para enviar propuesta."
```

**Resultado**: Actividad registrada en CRM, lead actualizado a etapa "Conversación", confirmación enviada al grupo.

---

### Tarea 2: Análisis Semanal de Mejora Continua

**ID**: `cb5586ac-a5f5-4ac0-a9dc-2da2729cfb28`

**Frecuencia**: Cada viernes a las 17:00h

**Función**:
- Obtiene todos los leads y actividades del CRM
- Analiza funnel de conversión
- Analiza rendimiento por fuente y categoría
- Calcula scoring dinámico
- Genera reporte HTML profesional
- Envía email a LOCAL_LEADS@list.alibaba-inc.com
- Envía notificación al grupo DingTalk

**Output**: Email HTML con reporte completo + notificación en DingTalk.

---

## Archivos Creados

### Scripts Python

1. **`continuous_improvement.py`**
   - Análisis de funnel de conversión
   - Análisis de rendimiento por fuente
   - Análisis de rendimiento por categoría
   - Análisis de feedback de comerciales
   - Cálculo de scoring dinámico
   - Generación de reporte semanal

2. **`ab_testing_predictive.py`**
   - A/B testing de ángulos de venta
   - Análisis de rendimiento por ángulo
   - Cálculo de probabilidad de conversión
   - Generación de reporte predictivo
   - Recomendaciones de acciones

3. **`dingtalk_listener.py`**
   - Polling de mensajes del grupo DingTalk
   - Parseo de mensajes en lenguaje natural
   - Creación de registros de actividad
   - Actualización de etapas de leads
   - Envío de confirmaciones

### Documentos

4. **`dashboard_comercial.html`**
   - Panel de métricas en tiempo real
   - Visualización de funnel
   - Tablas de rendimiento
   - Top 5 predicciones
   - Recomendaciones

5. **`email_template.html`**
   - Plantilla HTML para emails
   - Diseño profesional con gradiente
   - Tarjetas de métricas
   - Tablas con colores
   - Footer corporativo

6. **`email_format_guide.md`**
   - Guía de formato de email
   - Estructura HTML
   - Colores corporativos
   - Tips de legibilidad
   - Ejemplos de código

7. **`solucion_implementada.md`**
   - Documentación técnica completa
   - Arquitectura del sistema
   - Flujo de trabajo
   - Field IDs del CRM
   - Troubleshooting

8. **`sistema_agente_comercial.md`**
   - Guía de uso para el equipo
   - Ejemplos de mensajes
   - Etapas de leads
   - Reglas de negocio

---

## Field IDs del CRM

### Tabla Leads (2WvQMwT)

| Campo | Field ID |
|-------|----------|
| ID | uWeq8Gd |
| Empresa | jELV4xU |
| Etapa | HDpJXUF |
| Puntuacion | GNV2sjB |
| Categoria | UBmKoOZ |
| Fuente | asFXwaL |
| Valoracion | 3cjcqB5 |
| Angulo_acercamiento | bImSMO2 |
| Fecha_ultima_actividad | TgDWDQJ |
| Proximo_paso | b63Kewk |

### Tabla Actividad (8mWSwem)

| Campo | Field ID |
|-------|----------|
| Fecha | RoDpKB1 |
| ID_lead | nuS5r84 |
| Empresa | w5buqxh |
| Comercial | sj1t51y |
| Canal | aGMrZH5 |
| Resultado | H3v3u5Y |
| Nota | 3lOFjTR |
| Proximo_paso | v8YQMpu |
| Fecha_proximo_paso | dr044fY |

---

## Cómo Usar el Sistema

### Para Sergio y Jorge

1. **Registrar actividad**: Enviar mensaje al grupo DingTalk "LOCAL BD INTERNAL V2"
   ```
   "Llamé a [Empresa], [resultado]. [Próximo paso]."
   ```

2. **Valorar lead**: Actualizar campo "Valoracion" en CRM con 👍 o 👎

3. **Recibir reporte**: Email automático cada viernes con análisis completo

### Para José (Manager)

1. **Monitorear**: Dashboard HTML con métricas en tiempo real
2. **Analizar**: Reporte semanal con recomendaciones
3. **Ajustar**: Scoring dinámico se ajusta automáticamente según resultados

---

## Próximos Pasos

1. **Probar flujo completo**: Sergio o Jorge envían mensaje de prueba → se registra en CRM → se actualiza lead → llega confirmación
2. **Validar análisis semanal**: Esperar al viernes 17:00h para recibir primer reporte automático
3. **Ajustar parseo**: Refinar lógica de parseo de mensajes según uso real
4. **Feedback del equipo**: Recoger feedback de Sergio y Jorge para mejorar el sistema

---

## Soporte

Si hay problemas con el sistema:
1. Revisar logs de tareas programadas en QoderWork
2. Verificar que los comandos DWS funcionan correctamente
3. Comprobar que los field IDs del CRM son correctos
4. Contactar con José para ajustes

---

**Fecha de implementación**: 2026-10-27
**Versión**: 1.0
**Estado**: En producción
