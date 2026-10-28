# Guía de Trabajo - Agente Comercial Cainiao Iberia

## Flujo Diario (Lunes a Viernes, 8:30h Madrid)

### Lo que hace el agente automáticamente

1. **Verifica si es día laborable** (excluye festivos nacionales y de Madrid)
2. **Prepara el CRM** (solo si es la primera vez)
3. **Busca 10 leads nuevos** según ICP:
   - Categorías: hogar y decoración, belleza, juguetes, deporte
   - Mínimo 100 envíos/día estimados
   - Prioriza los más grandes (>300 envíos/día)
4. **Investiga y puntúa** cada lead (0-100) según:
   - Volumen estimado (40 puntos)
   - Señal de dolor (20 puntos) - problemas en Trustpilot, Google, Miravia
   - Crecimiento (15 puntos) - nuevas tiendas, campañas, ofertas de empleo
   - Tamaño grande (15 puntos)
   - Categoría prioritaria (10 puntos)
5. **Reparte los leads** entre Sergio y Jorge:
   - 6 Grandes + 4 Medianos
   - Cada comercial recibe 3 Grandes + 2 Medianos
   - Alterna por puntuación (el mejor puntuado al siguiente comercial libre)
6. **Revisa seguimientos pendientes** (leads con fecha próximo paso vencida)
7. **Envía email** a j.tralci@cainiao.com con:
   - Leads nuevos por comercial
   - Seguimientos del día
   - Candidatos descartados y motivo
   - Avisos de capacidad
8. **Avisa al grupo DingTalk** "LOCAL BD INTERNAL V2" con resumen del día

### Lo que hacen los comerciales

**Sergio Magán y Jorge Daniel Arango:**

1. **Revisan el email diario** con sus leads nuevos y seguimientos
2. **Contactan los leads** en las primeras 48h usando el canal recomendado (LinkedIn o teléfono)
3. **Registran la actividad** en el CRM o por DingTalk:
   - Fecha
   - Canal usado (llamada, LinkedIn, email, reunión, visita)
   - Resultado (no contesta, contactado sin decisor, conversación con decisor, rechazo, reunión agendada, propuesta enviada)
   - Nota breve
   - Próximo paso y fecha
4. **Actualizan la etapa del lead** según avance:
   - Asignado → Intento → Conversación → Cualificado → Reunión-Propuesta → Piloto-Cliente
   - O → Perdido (si no encaja)

---

## Cómo Registrar Actividad

### Opción 1: Escribir al agente por DingTalk

Envía un mensaje al agente con formato natural, por ejemplo:

```
Llamé a Kave Home, hablé con el director de operaciones, interesado. Seguimiento el jueves para enviar propuesta.
```

El agente:
- Identifica el lead por el nombre de empresa
- Escribe la fila en la pestaña "Actividad"
- Actualiza etapa, fecha última actividad y próximo paso en "Leads"
- Te confirma lo registrado

### Opción 2: Escribir directamente en el CRM

Ve a la pestaña "Actividad" y añade una fila con:
- Fecha
- ID lead (ej: L-0001)
- Empresa
- Tu nombre (Comercial)
- Canal
- Resultado
- Nota
- Próximo paso y fecha

**Importante:** No pases un lead a "Cualificado" sin tener:
- Envíos/día reales (no estimados)
- Interés confirmado del decisor

Si faltan estos datos, el agente te preguntará antes de avanzar el lead.

---

## Ejemplos de Conversación con el Agente

### Escenario 1: Registrar actividad después de una llamada

**Tú (Sergio):**
```
Llamé a Kave Home, hablé con el director de operaciones, interesado. 
Seguimiento el jueves para enviar propuesta.
```

**Agente:**
```
Registrado en CRM:
- Lead: L-0001 Kave Home
- Actividad: Llamada → Conversación con decisor
- Nota: Interesado en optimización cadena de suministro
- Próximo paso: Enviar propuesta
- Fecha próximo paso: 2026-10-29
- Etapa actualizada: Conversación → Cualificado
```

---

### Escenario 2: Registrar contacto sin éxito

**Tú (Jorge):**
```
Llamé a Sklum 3 veces esta semana, no contesta nadie. 
¿Qué hago?
```

**Agente:**
```
Entendido. Registro la actividad:
- Lead: L-0002 Sklum
- Resultado: No contesta (3 intentos)
- Próximo paso: Reintentar en 1 semana
- Etapa: Intento

Si tras 5 intentos no contesta, lo pasaré a Perdido con motivo "No responde". 
¿Quieres que te avise cuando se cumpla el plazo?
```

---

### Escenario 3: Pedir información sobre un lead

**Tú (Sergio):**
```
¿Qué sabes de Deporvillage? ¿Cuántos envíos mueven?
```

**Agente:**
```
Lead L-0003 Deporvillage:
- Categoría: Deporte
- Tamaño: Grande
- Envíos/día estimados: 500-1000 (Confianza: Alta)
- Puntuación: 85/100
- Señal de dolor: Sí - problemas en Trustpilot mencionan incidencias en envíos
  URL: https://es.trustpilot.com/review/www.deporvillage.com
- Fuente: Tienda propia
- Contacto: info@deporvillage.com
- LinkedIn: https://www.linkedin.com/company/deporvillage
- Cargo objetivo: Director de Operaciones / E-commerce Manager
- Canal recomendado: LinkedIn
- Ángulo: Mejora logística y reducción de incidencias en envíos deportivos

¿Necesitas algo más?
```

---

### Escenario 4: Reportar rechazo

**Tú (Jorge):**
```
Hablé con Westwing, tienen contrato vigente con otro operador hasta marzo 2027. 
No les interesa cambiar ahora.
```

**Agente:**
```
Registrado:
- Lead: L-0004 Westwing
- Resultado: Rechazo
- Motivo de pérdida: Contrato vigente
- Nota: Contrato hasta marzo 2027
- Etapa: Perdido

¿Quieres que te lo recuerde en febrero 2027 para tantear de nuevo cuando se acerque la renovación?
```

---

### Escenario 5: Pedir reasignación de lead

**Tú (Sergio):**
```
Creo que Hiper Montigalá encaja mejor para Jorge, él ya tiene experiencia con 
bazares chinos. ¿Se lo puedo pasar?
```

**Agente:**
```
Entendido. No puedes reasignar leads directamente, pero puedo consultarlo con José.

Le envío un mensaje a José:
"Sergio propone reasignar L-0009 Hiper Montigalá a Jorge por experiencia previa 
con bazares chinos. ¿Aprobado?"

Te aviso cuando responda.
```

---

### Escenario 6: Registrar reunión agendada

**Tú (Jorge):**
```
Agendé reunión con La Oca para el viernes a las 10h. 
Asiste el responsable de logística y el director general.
```

**Agente:**
```
Registrado:
- Lead: L-0006 La Oca
- Actividad: Reunión agendada
- Fecha reunión: 2026-10-30 10:00
- Asistentes: Responsable de logística + Director general
- Etapa: Reunión-Propuesta
- Próximo paso: Preparar propuesta personalizada
- Fecha próximo paso: 2026-10-30

¿Necesitas ayuda con la propuesta? Puedo prepararte un resumen de sus necesidades 
basado en la investigación inicial.
```

---

### Escenario 7: Preguntar por seguimientos pendientes

**Tú (Sergio):**
```
¿Qué seguimientos tengo pendientes para hoy?
```

**Agente:**
```
Tus seguimientos para hoy (27/10/2026):

1. L-0001 Kave Home - VENCIDO (era para ayer)
   Próximo paso: Primer contacto por LinkedIn
   
2. L-0003 Deporvillage - VENCIDO (era para ayer)
   Próximo paso: Primer contacto por LinkedIn

3. L-0005 Lookfantastic - Hoy
   Próximo paso: Primer contacto por LinkedIn

4. L-0007 Makeup España - Mañana
   Próximo paso: Primer contacto telefónico

Tienes 2 seguimientos vencidos. ¿Necesitas más tiempo o prefieres que los 
reprograme para esta semana?
```

---

### Escenario 8: Reportar lead cualificado con datos reales

**Tú (Jorge):**
```
Cualifiqué a Sklum. Hablé con el responsable de logística, me confirmó que 
mueven unos 800 envíos/día. Están interesados en mejorar tiempos de entrega. 
Quiere una propuesta la semana que viene.
```

**Agente:**
```
Perfecto. Actualizo el CRM:
- Lead: L-0002 Sklum
- Etapa: Cualificado
- Envíos/día reales: 800
- Decisor identificado: Sí (Responsable de logística)
- Valor anual estimado: 800 × 2,3€ × 250 = 460.000€
- Próximo paso: Enviar propuesta
- Fecha próximo paso: 2026-11-03 (lunes)

¿Quieres que te prepare un esquema de propuesta basado en sus necesidades?
```

---

### Escenario 9: Preguntar por capacidad de leads

**Tú (Sergio):**
```
¿Cuántos leads tengo ahora mismo? ¿Me puedes asignar más?
```

**Agente:**
```
Tu estado actual:

Leads en etapa Asignado: 3
Leads en etapa Intento: 2
Leads en etapa Conversación: 1
Leads en etapa Cualificado: 1
Total: 7 leads

Capacidad disponible: 8 leads más (máximo 15 en Asignado/Intento)

Sí, puedo asignarte más en el próximo reparto diario. 
¿Prefieres que priorice alguna categoría en particular?
```

---

### Escenario 10: Valorar un lead

**Tú (Jorge):**
```
El lead de Casa Viva me parece flojo, no contestan y la web se ve pequeña. 
Le pongo 👎
```

**Agente:**
```
Registrado:
- Lead: L-0010 Casa Viva
- Valoración: 👎
- Motivo: No responde + volumen dudoso

Voy a investigar más a fondo para verificar si realmente cumple el ICP. 
Si confirmas que no encaja, lo paso a Perdido con motivo "Volumen insuficiente".

Mientras tanto, mañana te asigno un lead nuevo de mayor calidad para compensar.
```

---

### Consejos para hablar con el agente

1. **Sé natural:** No necesitas usar formato especial, habla como hablarías con un compañero
2. **Menciona la empresa:** El agente identifica el lead por el nombre de empresa, no necesitas decir el ID (aunque ayuda)
3. **Indica el resultado:** Di claramente qué pasó (no contesta, interesado, rechazo, reunión agendada)
4. **Próximo paso:** Si sabes cuándo será el siguiente contacto, dilo (jueves, próxima semana, etc.)
5. **Pide ayuda:** Si necesitas información, propuestas o tienes dudas, pregúntale directamente
6. **Valora los leads:** Dile si un lead es bueno o malo para que mejore la selección futura

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
| **Sin gestionar** | 5 días sin actividad (lo gestiona el agente) | Solo José puede reasignar |

---

## Motivos de Pérdida

Cuando un lead se pierde, indica el motivo:
- **Precio** - Nuestro precio no encaja
- **Contrato vigente** - Tienen contrato con otro operador
- **Volumen insuficiente** - No llegan a 100 envíos/día
- **Sin interés** - No quieren cambiar de operador
- **No responde** - No contestan después de varios intentos
- **Otro** - Especificar en comentario

---

## Reglas Importantes

### Capacidad máxima
- Cada comercial puede tener máximo **15 leads** en etapa "Asignado" o "Intento"
- Si llegas a 15, el agente no te asignará nuevos hasta que cierres o pierdas algunos
- El agente te avisará en el email si estás cerca del límite

### Seguimientos vencidos
- Si la "Fecha próximo paso" es hoy o anterior, el agente te lo recordará
- Si pasas 5 días laborables sin actividad en un lead "Asignado", el agente lo pasará a "Sin gestionar" y avisará a José
- No reasignes leads tú mismo, solo José puede hacerlo

### Señales de dolor
- Presta atención a leads con señal de dolor = "Sí"
- Tienen problemas públicos en Trustpilot, Google o Miravia (retrasos, paquetes perdidos, mala entrega)
- Usa esto como argumento de venta: "Vimos que tenéis incidencias en entregas, nosotros podemos ayudaros a reducir eso"

### Origen chino
- Algunos leads son de propiedad o gestión china
- No los descartes, solo márcalos bien
- Estamos midiendo si responden mejor a nuestro enfoque

---

## Informe Semanal (Viernes)

Cada viernes, el agente envía a José un informe con:

1. **Tabla por comercial:**
   - Leads asignados
   - % tocados en 48h
   - Contactos realizados
   - Conversaciones con decisor
   - Cualificados
   - Reuniones
   - Pilotos/clientes
   - Seguimientos vencidos

2. **Embudo de la semana** y tasas de conversión entre etapas

3. **Pipeline en €** (envíos/día × 2,3 × 250 días laborables)

4. **Rendimiento por fuente, categoría, tamaño y origen**

5. **Motivos de pérdida** y % de leads con valoración negativa

6. **Leads en riesgo** y 3 recomendaciones concretas

---

## Métricas Clave

### Valor anual estimado
Se calcula automáticamente en el CRM:
```
Valor anual = Envíos/día × 2,3€ × 250 días laborables
```

Ejemplo:
- 500 envíos/día × 2,3€ × 250 = 287.500€/año

### Tasa de conversión objetivo
- De Asignado a Conversación: >60%
- De Conversación a Cualificado: >40%
- de Cualificado a Reunión-Propuesta: >50%
- De Reunión-Propuesta a Piloto-Cliente: >30%

### Actividad objetivo
- Contactar el 100% de leads nuevos en 48h
- Mantener menos de 5 seguimientos vencidos por comercial
- Actualizar CRM al menos 3 veces por semana

---

## Fuentes de Leads

El agente busca leads en este orden:

1. **Vendedores de Miravia** con alto volumen
2. **Tiendas propias** (Shopify, WooCommerce, PrestaShop) con anuncios activos
3. **Mayoristas y bazares de propiedad china** con venta online
4. **Vendedores de Amazon.es** con marca propia y muchas reseñas

Si encuentras mejores fuentes, díselo al agente para que las priorice.

---

## Exclusiones

No contactes a empresas que estén en la pestaña "Exclusiones" del CRM:
- Clientes actuales
- Empresas ya contactadas
- Competidores
- Mercancía peligrosa
- Alto valor (requiere seguro especial)
- Temperatura controlada

Si dudas, consulta la pestaña "Exclusiones" antes de contactar.

---

## Contacto con el Agente

### Por DingTalk
- Grupo "LOCAL BD INTERNAL V2" para avisos generales
- Mensaje directo al agente para registrar actividad o hacer preguntas

### Por Email
- j.tralci@cainiao.com para informes y decisiones estratégicas
- El agente solo envía emails a José, no a los comerciales directamente

### En el CRM
- Comenta en la pestaña "Comentario" del lead si necesitas contexto adicional
- Valora con 👍 o 👎 los leads según calidad
- El agente aprende de tus valoraciones para mejorar la selección

---

## Preguntas Frecuentes

**¿Qué hago si un lead no contesta después de 3 intentos?**
Registra la actividad con resultado "No contesta" y pon próximo paso "Reintentar en 1 semana". Si tras 5 intentos no contesta, el agente lo pasará a "Perdido" con motivo "No responde".

**¿Qué hago si el decisor no está interesado?**
Registra como "Rechazo" y indica el motivo. Si es por precio, contrato vigente o volumen, el agente lo marcará como "Perdido". Si es otro motivo, comenta en el CRM para analizarlo.

**¿Puedo reasignar un lead a otro comercial?**
No, solo José puede reasignar leads. Si crees que un lead encaja mejor en el otro comercial, díselo al agente y él lo consultará con José.

**¿Qué hago si tengo más de 15 leads?**
El agente no te asignará nuevos hasta que bajes de 15. Prioriza los que estén en etapa "Conversación" o superior y cierra o pierde los que estén estancados.

**¿Cómo sé si un lead es bueno?**
Mira la puntuación (0-100), la señal de dolor (si tiene problemas públicos) y la confianza del estimado de envíos/día (Alta/Media/Baja). Si la confianza es Baja, investiga más antes de dedicar mucho tiempo.

---

## Resumen Rápido

**Tú (comercial):**
- Contacta leads en 48h
- Registra actividad en CRM o por DingTalk
- Actualiza etapas según avance
- Valora leads con 👍/👎

**Agente:**
- Busca y puntúa leads nuevos cada día
- Reparte equilibradamente entre Sergio y Jorge
- Recueda seguimientos vencidos
- Envía informes a José

**José (manager):**
- Revisa informes diarios y semanales
- Reasigna leads si es necesario
- Toma decisiones estratégicas
- Aprueba cambios en el proceso

---

**Última actualización:** 27/10/2026
**Versión:** 1.0
