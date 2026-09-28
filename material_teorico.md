# Codificación asistida por IA

- [Diapositivas](./Diapositivas%20FIS.pptx)

Material teórico para la clase de Codificación asistida por IA, correspondiente a la unidad temática de calidad de código de Fundamentos de Ingeniería de Software (FIS). Este material se complementa con el [práctico introductorio](./practicos/introductorio/README.md).

## Objetivos de la clase

- Comprender los conceptos básicos de IA necesarios para utilizar herramientas de codificación asistida.
- Conocer qué es un agente y cómo puede participar en el proceso de desarrollo.
- Conocer las principales herramientas disponibles y los modos de interacción de GitHub Copilot.
- Aplicar buenas prácticas de prompt engineering vinculadas con buenas prácticas de codificación.
- Revisar y validar el código generado, asumiendo la responsabilidad sobre el resultado.

---

## 1. Conceptos básicos

### 1.1 Inteligencia Artificial y Machine Learning

La Inteligencia Artificial (IA) abarca el conjunto de técnicas que permiten a un sistema realizar tareas que normalmente requieren inteligencia humana, como reconocer patrones, interpretar lenguaje o tomar decisiones. El Machine Learning (aprendizaje automático) es un área de la IA en la que los sistemas aprenden a partir de datos, en lugar de seguir reglas programadas de forma explícita.

### 1.2 Modelo

Un modelo es un programa capaz de identificar patrones o tomar decisiones a partir de datos que no ha visto antes. Se crea mediante un proceso de entrenamiento, en el cual un algoritmo de aprendizaje automático analiza grandes conjuntos de datos para reconocer relaciones y generar reglas internas que le permitan realizar tareas específicas.

### 1.3 Large Language Models (LLMs)

Los LLMs son modelos entrenados con enormes volúmenes de datos, lo que les permite procesar y generar lenguaje natural, código y otros tipos de contenido. Un LLM genera su respuesta prediciendo, paso a paso, cuál es la continuación más probable del texto recibido.

Esto tiene dos consecuencias importantes para el desarrollo de software:

- **Las respuestas no son determinísticas:** la misma consulta puede generar resultados diferentes.
- **Las respuestas pueden ser incorrectas:** el modelo puede producir código sintácticamente correcto pero erróneo respecto a los requerimientos, o hacer referencia a funciones o bibliotecas que no existen (alucinaciones).

### 1.4 Prompt

Un prompt es la indicación o pregunta que se le da a un LLM para que realice una tarea y genere una respuesta. Puede estar formado por unas pocas palabras, una oración o un párrafo. Se denomina *prompt engineering* al proceso de diseñar estas instrucciones para obtener las salidas deseadas.

### 1.5 Contexto

El contexto es la información que el sistema de IA utiliza para generar su respuesta. Incluye el prompt, las interacciones previas de la conversación y otras fuentes como archivos del proyecto o documentación. Sin el contexto adecuado, las respuestas tienden a ser genéricas. Por otro lado, agregar información irrelevante puede dificultar que el modelo identifique los datos importantes.

### 1.6 Token

Un token es la unidad en la que se divide el texto para que pueda ser procesado por el modelo. Puede corresponder a una palabra, una parte de una palabra o un carácter. La cantidad de tokens determina cuánto contenido puede procesar un modelo (su ventana de contexto) y es la unidad utilizada por muchos proveedores para establecer límites de uso y costos.

---

## 2. Agentes

### 2.1 ¿Qué es un agente?

Un agente es un sistema que utiliza un LLM para alcanzar un objetivo de forma autónoma o semiautónoma, interactuando con su entorno mediante herramientas. Actúa según un ciclo de **pensamiento, acción y resultado**:

1. **Pensamiento:** el LLM razona sobre el problema y propone un plan de acción.
2. **Acción:** se ejecuta una herramienta, por ejemplo editar un archivo, ejecutar un comando o correr los tests.
3. **Resultado:** el agente recibe la retroalimentación de la acción (salida del compilador, resultado de los tests, errores) y decide cómo continuar.

Este ciclo se repite hasta completar la tarea. A diferencia de un asistente conversacional, un agente puede analizar un proyecto, planificar cambios, modificar archivos, ejecutar comandos y verificar resultados.

### 2.2 Agentes en el proceso de desarrollo

Los agentes pueden participar en diferentes actividades del ciclo de vida del software:

- **Requerimientos:** generación de historias de usuario, detección de ambigüedades o inconsistencias.
- **Diseño:** generación de diagramas y propuestas de estructura.
- **Implementación:** generación, explicación y refactorización de código.
- **Testing:** generación de casos de prueba, tests unitarios e identificación de casos borde.
- **Mantenimiento:** generación de documentación y detección de deuda técnica.

En este curso se trabaja en un escenario de **un único agente** integrado al IDE, que asiste al estudiante durante la codificación. Existen también sistemas multiagente, en los que varios agentes asumen roles especializados (por ejemplo, desarrollador y tester), que quedan fuera del alcance de esta clase.

### 2.3 Herramientas más relevantes

Según la encuesta de Stack Overflow de 2025 y otros reportes de la industria, algunas de las herramientas más utilizadas son:

| Herramienta | Empresa | Características |
|---|---|---|
| GitHub Copilot | Microsoft / GitHub | Integrado a VS Code. Autocompletado, chat y modos Ask, Plan y Agent |
| Claude Code | Anthropic | Agente utilizable desde la terminal, IDEs, escritorio y web |
| Codex | OpenAI | Agente que ejecuta tareas en un entorno aislado en la nube e integrable a IDEs |
| Cursor | Anysphere | Editor de código propio diseñado alrededor de capacidades de IA |
| Antigravity | Google | Plataforma agéntica con IDE propio, extensiones y línea de comandos |

En el curso se utiliza **GitHub Copilot** como herramienta de referencia, ya que los estudiantes pueden acceder sin costo mediante GitHub Education. Los conceptos trabajados pueden aplicarse a cualquiera de estas herramientas.

---

## 3. GitHub Copilot

### 3.1 Configuración

1. Verificar la cuenta de estudiante en [GitHub Education](https://docs.github.com/es/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students).
2. Abrir Visual Studio Code e iniciar sesión con la cuenta de GitHub.
3. Abrir la vista de chat de Copilot.
4. Abrir en VS Code la carpeta del proyecto con el que se va a trabajar.

### 3.2 Modos de interacción

GitHub Copilot ofrece, a la fecha de dictado, tres modos principales. Cada uno otorga un grado de autonomía diferente al agente y, por lo tanto, requiere un nivel de supervisión diferente.

#### Ask

El agente utiliza el contexto disponible para responder preguntas, explicar código o analizar el proyecto, pero **no modifica archivos**. El control permanece completamente en el usuario.

Ejemplos de uso:

- `¿Qué responsabilidad tiene la clase Movie? Explicá cómo se relaciona con ui.js.`
- `#file:app.js ¿Qué validaciones se realizan antes de agregar una película?`

Es recomendable seleccionar los archivos relevantes como contexto (por ejemplo, mediante `#file`) para obtener respuestas más precisas.

#### Plan

El agente analiza la tarea y el proyecto, y genera una estrategia de ejecución antes de realizar modificaciones. Puede identificar archivos relevantes, detectar restricciones y descomponer la tarea en pasos. Los cambios quedan bloqueados hasta que el plan sea aprobado.

Ejemplo de uso:

- `Planificá cómo agregar un buscador por título que filtre en tiempo real. No modifiques archivos todavía. Indicá qué archivos se verían afectados y por qué.`

Antes de aprobar un plan, se debe revisar que los pasos tengan sentido, que respeten la separación de responsabilidades y que el alcance sea razonable.

#### Agent

El agente posee un mayor grado de autonomía: puede seleccionar las acciones necesarias, modificar archivos, ejecutar comandos, verificar los resultados e iterar cuando detecta errores.

Ejemplo de uso:

- `Agregá un botón "Eliminar" en cada card de película. Al hacer clic, la película debe desaparecer de la lista sin recargar la página. Mantené la lógica de dominio fuera de ui.js y no agregues bibliotecas externas.`

Al utilizar este modo, se deben revisar todos los archivos modificados y los comandos que el agente propone ejecutar antes de aceptarlos.

### 3.3 Instrucciones personalizadas

Las herramientas permiten definir archivos de instrucciones que se agregan automáticamente a cada consulta, por ejemplo `AGENTS.md` o `.github/copilot-instructions.md`. Estos archivos permiten indicar convenciones del proyecto, buenas prácticas y restricciones, evitando repetirlas en cada prompt. En el curso se provee un archivo [AGENTS.md](./AGENTS.md) adaptado a FIS.

---

## 4. Buenas prácticas de prompt engineering

Un prompt claro y específico aumenta la probabilidad de obtener código de calidad. Las buenas prácticas de codificación vistas en el curso deben formar parte de las instrucciones.

### 4.1 Ser específico

Indicar qué se espera del código: lenguaje, estructura, nombres, estilo y prácticas a aplicar.

| Prompt poco específico | Prompt específico |
|---|---|
| `Hacé un contador de películas.` | `En ui.js agregá una función renderMovieCount(list) que muestre "Total de películas: N" en un elemento con id "movie-count". Usá nombres descriptivos y seguí el estilo de las funciones existentes.` |

### 4.2 Proporcionar contexto

- Referenciar los archivos relevantes en lugar de todo el proyecto.
- Explicar el objetivo de la funcionalidad y quién la utiliza.
- Indicar las tecnologías permitidas (por ejemplo, JavaScript sin bibliotecas externas).

### 4.3 Especificar restricciones y casos borde

- Indicar qué no se debe modificar.
- Indicar entradas y salidas esperadas, idealmente con ejemplos.
- Mencionar los casos borde que deben contemplarse (valores vacíos, duplicados, datos inválidos).

### 4.4 Relacionar el pedido con atributos de calidad

Solicitar que la respuesta explique cómo los cambios afectan atributos como la legibilidad, la mantenibilidad o la separación de responsabilidades.

Ejemplo: `Antes de implementar, explicá cómo el cambio mantiene separada la lógica de dominio de la interfaz.`

### 4.5 Descomponer el trabajo

Dividir las tareas grandes en partes pequeñas y verificables. Es preferible pedir una funcionalidad por vez, probarla y realizar un commit, antes de avanzar con la siguiente.

### 4.6 Pedir que la IA pregunte

Formular el prompt de modo que, si faltan detalles, la IA los solicite en lugar de asumirlos.

Ejemplo: `Si necesitás información adicional para implementar esto, preguntame antes de modificar archivos.`

### 4.7 Iterar

Si el resultado no es el esperado, refinar el prompt indicando qué está mal y por qué, en lugar de aceptar una solución parcial.

---

## 5. Revisión y validación del código generado

La IA es una herramienta de asistencia. El desarrollador sigue siendo responsable del código que entrega. Este enfoque se conoce como **human-in-the-loop**: una persona valida y corrige los artefactos generados antes de incorporarlos al proyecto.

Antes de aceptar un cambio generado por IA, se recomienda:

1. **Leer** el código generado y los archivos modificados.
2. **Comprender** qué hace y por qué. Si no se puede explicar, no se debe aceptar.
3. **Ejecutar** la aplicación y probar la funcionalidad, incluyendo casos borde.
4. **Correr** los tests y el linter, si el proyecto los tiene.
5. **Verificar** que se cumplan los criterios de aceptación y las buenas prácticas del curso.
6. **Revisar** que no se hayan realizado cambios no solicitados.
7. **Registrar** qué se aceptó, qué se corrigió y qué se descartó.

### Riesgos a tener en cuenta

- **Código incorrecto o incompleto:** soluciones que parecen correctas pero fallan en casos no contemplados.
- **Cambios no solicitados:** especialmente en modo Agent, la herramienta puede modificar partes del proyecto que no se pidieron.
- **Sobreingeniería:** soluciones innecesariamente complejas o con dependencias no requeridas.
- **Pérdida de comprensión:** acumular código que no se comprende dificulta detectar y corregir errores en el futuro.
- **Privacidad y seguridad:** no incluir en el contexto datos personales, contraseñas ni API keys.

---

## 6. Preguntas para discutir en clase

1. Si el código generado por la IA funciona, ¿es suficiente para considerarlo correcto? ¿Qué otros aspectos de calidad se deberían revisar?
2. ¿Quién es responsable de un error en producción originado por código generado con IA?
3. ¿Cómo se puede verificar que la IA no realizó cambios no solicitados en el proyecto?
4. ¿Qué diferencias de control y supervisión existen entre los modos Ask, Plan y Agent? ¿En qué situaciones conviene usar cada uno?
5. ¿Qué información del curso (buenas prácticas, convenciones, restricciones) se debería incluir en un prompt para obtener código de mejor calidad?
6. Un compañero acepta todos los cambios sugeridos por la IA sin revisarlos. ¿Qué riesgos identificás a corto y a largo plazo?
7. ¿Qué habilidades se vuelven más importantes para un desarrollador que trabaja con agentes de IA?

---

## Referencias

- IBM. *What Are Large Language Models (LLMs)?* https://www.ibm.com/think/topics/large-language-models
- IBM. *What Are AI Agents?* https://www.ibm.com/think/topics/ai-agents
- Anthropic. *Building Effective AI Agents.* https://www.anthropic.com/engineering/building-effective-agents
- Anthropic. *Effective context engineering for AI agents.* https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- GitHub. *About GitHub Copilot.* https://docs.github.com/en/copilot/get-started/about-github-copilot
- A. Ziegler y J. Berryman. *A developer's guide to prompt engineering and LLMs.* https://github.blog/ai-and-ml/generative-ai/prompt-engineering-guide-generative-ai-llms/
- Stack Overflow. *2025 Stack Overflow Developer Survey: AI.* https://survey.stackoverflow.co/2025/ai
- S. Willison. *Your job is to deliver code you have proven to work.* https://simonwillison.net/2025/Dec/18/code-proven-to-work/
- W. Takerngsaksiri et al. *Human-In-The-Loop Software Development Agents.* ICSE-SEIP, 2025. https://doi.org/10.1109/ICSE-SEIP66354.2025.00036
