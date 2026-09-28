# Ejercicio Mission Control

## Objetivos

- Escribir tests unitarios de forma manual siguiendo la estructura AAA (Arrange, Act y Assert)
- Entender un dominio existente con ayuda de IA
- Generar casos de prueba exploratorios con apoyo de IA
- Escribir y profundizar tests unitarios
- Corregir validaciones y casos borde con buenas prácticas
- Mantener separación entre dominio y pruebas

### Aspectos a tener en cuenta

- La IA se usa para proponer escenarios, charters y casos de prueba, no para modificar la UI.
- Los test unitarios deben vivir en los archivos `*.test.js` de la carpeta `domain/tests`.
- Los tests deben seguir la estructura AAA (Arrange, Act y Assert).
- La cobertura debe llegar a 100 % de sentencias y ramas en el dominio entregado.
- Alcanzar 100 % de cobertura no garantiza por sí solo que los tests sean buenos: también se debe revisar que los casos sean pertinentes, legibles y cubran riesgos reales.
- Ejecutar `npm run lint` y `npm run test` antes de considerar terminado el trabajo.

---

### Estructura del proyecto

- `domain/mission.js`: Contiene la clase `Mission`.
- `domain/mission_log.js`: Contiene la clase `MissionLog`, que agrupa misiones.
- `domain/tests/`: Contiene los tests unitarios del dominio.
- `index.html`, `styles.css` y `main.js`: Contienen la interfaz de usuario.

---

### Setup inicial

Requisitos: Node.js 18 o superior.

1. Instalar dependencias con `npm install`.
2. Ejecutar `npm run lint`.
3. Ejecutar `npm run test`. Se muestra en consola el reporte de cobertura y se genera un reporte en HTML en `coverage/lcov-report/index.html`.
4. Levantar la app con `npm run dev` y abrir en el navegador la dirección que se indica en consola (por defecto `http://localhost:5173`) para observar el comportamiento y preparar pruebas exploratorias.
5. Copiar el archivo [AGENTS.md](../../AGENTS.md) en la raíz de la carpeta abierta en el IDE, para que el agente siga las pautas del curso.

---

### Parte A — Tests unitarios manuales (sin IA)

Esta parte se resuelve sin utilizar herramientas de IA.

1. Leer las clases `Mission` y `MissionLog` y los tests existentes.
2. Identificar al menos dos comportamientos que no estén cubiertos por los tests existentes (por ejemplo, revisar el reporte de cobertura).
3. Escribir al menos dos tests para `Mission` y uno para `MissionLog`, siguiendo la estructura AAA.
4. Ejecutar `npm run test` y verificar que los nuevos tests pasen por la razón correcta (por ejemplo, modificando temporalmente el valor esperado para confirmar que el test falla).

---

### Parte B — Análisis manual y Ask para generar pruebas exploratorias

Primero analizar manualmente el dominio y la interfaz. Luego usar Copilot Chat en modo Ask para profundizar en la estructura del proyecto y ampliar las ideas de prueba.

1. Identificar qué hace la app y cómo está organizada.
2. Observar el flujo desde la interfaz y anotar puntos de riesgo.
3. Escribir al menos tres escenarios de prueba propios antes de consultar a la IA.
4. Usar el modo Ask para consultar sobre la estructura del proyecto y la responsabilidad de cada clase. Contrastar las respuestas con el código.
5. Pedirle a la IA una lista de charters de testing exploratorio para `Mission` y `MissionLog`.
6. Pedirle a la IA criterios de observación, datos de entrada y resultados esperados para cada charter.
7. Seleccionar los escenarios más valiosos y convertirlos en una guía de prueba.
8. Ejecutar los casos de prueba seleccionados sobre la aplicación y registrar el resultado obtenido frente al esperado.
9. Descartar o corregir los casos de IA que no coincidan con el comportamiento real del código.

---

### Parte C — Generación de tests unitarios con IA

Usar la IA para generar y refinar tests unitarios sobre el dominio.

1. Pedirle a la IA una propuesta inicial de tests para `Mission`.
2. Pedirle a la IA una propuesta inicial de tests para `MissionLog`.
3. Incluir casos felices, casos borde y casos inválidos.
4. Verificar que los tests cubran ramas relevantes de validación y cálculo.
5. Ajustar los tests hasta que reflejen el comportamiento real del dominio y respeten la estructura AAA.
6. Ejecutar `npm run test` y revisar si algún test pasa por una razón equivocada.

---

### Parte D — Completar el dominio y corregir validaciones

El dominio entregado tiene dos funciones sin implementar (marcadas con `// TODO`) y algunas validaciones faltantes. Utilizar la IA para implementarlas, escribiendo en el prompt los criterios que se detallan a continuación, y agregar los tests correspondientes.

1. Implementar `getReadinessMessage()` en la clase `Mission`. Debe retornar el primer mensaje que corresponda, en el siguiente orden:

   | Condición | Mensaje |
   |---|---|
   | El estado es `completed` | `Mission completed` |
   | El estado es `launched` | `Mission in progress` |
   | La misión está lista para lanzarse (`isLaunchReady()`) | `Ready for launch` |
   | El estado no es `ready` | `Waiting for ready status` |
   | Tiene menos de 3 tripulantes | `Needs at least 3 crew members` |
   | En cualquier otro caso | `Duration must be greater than 0` |

2. Implementar `getCriticalMissions()` en la clase `MissionLog`. Debe retornar las misiones que requieren atención inmediata: aquellas con estado `delayed` y aquellas con estado `ready` que no están listas para lanzarse.

3. Durante las pruebas exploratorias, verificar qué ocurre al crear una misión con un estado no permitido o con una duración negativa. Corregir el constructor de `Mission` para que:
   - lance el error `Invalid mission status` si el estado no es uno de los permitidos;
   - lance el error `Duration must be zero or positive` si la duración es negativa.

4. Revisar que los cambios generados por la IA respeten los criterios anteriores, no modifiquen otras funcionalidades y no rompan los tests existentes. Si el linter advierte que una función es demasiado compleja, pedirle a la IA que proponga cómo simplificarla y evaluar la propuesta.

---

### Parte E — Completar cobertura con ayuda de IA

Usar la IA para realizar un análisis de casos borde y detectar qué ramas o sentencias faltan cubrir.

1. Revisar el reporte de cobertura.
2. Pedirle a la IA un análisis de casos borde del dominio y qué escenarios faltan para completar ramas y sentencias.
3. Agregar los tests faltantes sin duplicar casos ya cubiertos.
4. Volver a ejecutar la suite hasta alcanzar el 100 % de cobertura de sentencias y ramas.
5. Revisar si los nuevos tests aportan valor o solo aumentan cobertura.

---

### Parte F — Reflexión

Responder brevemente:

1. Qué tests y escenarios escribiste manualmente antes de usar IA.
2. Qué prompts funcionaron mejor para generar charters exploratorios.
3. Qué prompts funcionaron mejor para generar tests unitarios.
4. Qué casos faltaban al principio y cómo los detectaste.
5. Qué errores cometió la IA al proponer tests o al implementar las funciones de la Parte D.
6. Qué casos tuviste que corregir manualmente.
7. Qué parte fue más difícil de cubrir con tests.
8. Por qué 100 % de cobertura no alcanza para afirmar que la suite es de buena calidad.

---

### Recomendaciones

- Revisar siempre el código generado.
- Escribir primero los casos exploratorios y después los tests unitarios.
- Probar casos borde y valores inválidos.
- Mantener la separación entre dominio y pruebas.
- Usar la IA para generar ideas y luego validarlas con criterio propio.

---

### Importante

La IA es una herramienta de asistencia.

Todo el código generado debe ser:

- comprendido,
- revisado,
- y validado antes de considerarse correcto.

# Recursos
- [Configuración de agentes en VSCode](https://code.visualstudio.com/docs/agents/agents-tutorial)
- [Documentación Vitest](https://vitest.dev/guide/)
- [Cobertura en Vitest](https://vitest.dev/guide/coverage)
- [Documentación JavaScript](https://www.w3schools.com/js/)
