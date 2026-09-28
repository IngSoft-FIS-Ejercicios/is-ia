# Guía docente

## 1. Introducción

La Inteligencia Artificial (IA) está transformando la forma en que se desarrolla software, modificando procesos tradicionales de Ingeniería de Software. Herramientas como los agentes de programación y los modelos de lenguaje forman parte del entorno profesional actual y están redefiniendo las competencias que se esperan de los futuros ingenieros de software.

En este contexto, la formación universitaria tiene el desafío de preparar a los estudiantes para utilizar estas tecnologías de manera eficaz, crítica y responsable. El objetivo no es sustituir el aprendizaje de los fundamentos de la Ingeniería de Software, sino enriquecerlo mediante el uso adecuado de herramientas de IA que potencien la productividad, favorezcan la resolución de problemas y faciliten el desarrollo de soluciones de calidad, manteniendo siempre el juicio técnico y la supervisión humana.

Esta guía reúne un conjunto de buenas prácticas dirigidas al docente para integrar la inteligencia artificial en la enseñanza de la Ingeniería de Software. Su propósito es ofrecer orientaciones que permitan diseñar actividades, evaluaciones y experiencias de aprendizaje en las que la IA sea una herramienta de apoyo para el desarrollo de competencias profesionales, promoviendo un uso ético, transparente y fundamentado en los principios de la disciplina.

Las recomendaciones aquí presentadas buscan fomentar que los estudiantes aprendan a utilizar la IA como un recurso para analizar requisitos, diseñar arquitecturas, generar y revisar código, elaborar documentación, crear pruebas, depurar aplicaciones y apoyar otras actividades propias del ciclo de vida del software. Al mismo tiempo, se enfatiza la importancia de desarrollar habilidades para evaluar críticamente las respuestas generadas por estos sistemas, reconocer sus limitaciones, identificar posibles errores o sesgos y asumir la responsabilidad sobre los resultados obtenidos.

La incorporación de IA en la formación de Ingeniería de Software debe entenderse como una oportunidad para fortalecer las competencias técnicas y profesionales que demanda la industria, sin reemplazar el aprendizaje de los fundamentos de la disciplina. En este sentido, el papel del docente continúa siendo esencial para guiar el proceso de aprendizaje, promover el pensamiento crítico y garantizar que el uso de estas tecnologías contribuya al desarrollo de profesionales capaces de trabajar con IA de forma competente, ética y responsable.

Las orientaciones de esta guía deben aplicarse en conjunto con los lineamientos institucionales de la Universidad ORT Uruguay respecto al uso de herramientas de IA y a la integridad académica. En caso de diferencias, prevalecen los lineamientos institucionales y las pautas definidas por cada asignatura.

## 2. Principios de uso responsable

La incorporación de herramientas de inteligencia artificial en la enseñanza de la Ingeniería de Software debe sustentarse en principios que promuevan un uso ético, crítico y profesional de estas tecnologías. El objetivo es formar estudiantes capaces de aprovechar las ventajas de la IA sin delegar en ella las responsabilidades propias del desarrollo de software.

Los estudiantes deben comprender que la responsabilidad sobre las decisiones técnicas y sus consecuencias permanece en las personas, independientemente del uso de estas herramientas.

### 2.1 Validación de contenido

La inteligencia artificial debe utilizarse como un asistente que facilite determinadas tareas del proceso de desarrollo de software, pero no como un reemplazo del conocimiento técnico ni del razonamiento del estudiante. Los alumnos deben comprender que la IA puede sugerir soluciones, generar código o explicar conceptos, pero la responsabilidad de comprender, validar y justificar dichas soluciones recae siempre en quien las utiliza.

Todo código, documentación, caso de prueba o artefacto generado mediante IA debe ser revisado antes de su utilización. La IA puede producir soluciones aparentemente correctas que contengan errores de lógica, problemas de rendimiento, vulnerabilidades de seguridad o incumplimiento de requisitos.

Como buena práctica, el estudiante debe:

* Revisar el código generado
* Ejecutarlo y probarlo
* Verificar que cumple los requisitos establecidos 
* Si corresponde para la asignatura, evaluar que cumpla con ciertos atributos de calidad (por ejemplo seguridad, mantenibilidad y legibilidad)
* Poder justificar las decisiones adoptadas

### 2.2 IA como herramienta de apoyo

Las actividades docentes deben fomentar que el estudiante resuelva problemas utilizando la IA como apoyo, evitando una dependencia que limite el desarrollo de sus competencias profesionales.

Las respuestas generadas por modelos de IA pueden contener errores, información desactualizada, omisiones o soluciones técnicamente incorrectas. Por ello, resulta fundamental que los estudiantes desarrollen la capacidad de analizar críticamente los resultados obtenidos antes de incorporarlos a un proyecto.

Se debe, desde el lado docente, promover la validación sistemática de las respuestas mediante la consulta de documentación oficial, bibliografía especializada, pruebas de software y otras fuentes confiables. Se deberá fomentar el uso de estas fuentes y enseñarle al alumno cómo se puede acceder a ellas.

La utilización de herramientas de IA no debe sustituir el aprendizaje de los fundamentos de la Ingeniería de Software como disciplina. Antes de automatizar tareas mediante IA, el estudiante debe comprender los conceptos, métodos y técnicas involucrados.

La IA debe contribuir a profundizar el aprendizaje, facilitando la exploración de alternativas y la resolución de problemas, pero nunca reemplazar el proceso de adquisición del conocimiento.

### 2.3 Transparencia de contenido generado

Es recomendable fomentar una cultura de transparencia respecto al uso de herramientas de IA en las actividades académicas. Cuando una tarea haya sido desarrollada con asistencia de IA, los estudiantes deberían indicar qué herramienta utilizaron, para qué propósito y cuál fue su grado de intervención en el resultado final.

Esta práctica favorece la integridad académica y permite evaluar adecuadamente las competencias desarrolladas por el estudiante.

### 2.4 Privacidad de datos

Los estudiantes deben evitar introducir en herramientas de IA información sensible o confidencial, incluyendo datos personales, credenciales de acceso, código propietario o información perteneciente a organizaciones externas.

Asimismo, es importante promover el conocimiento de las políticas institucionales sobre privacidad y tratamiento de datos, así como las condiciones de uso de cada herramienta de IA empleada.

Cuando se utilicen agentes capaces de modificar archivos o ejecutar comandos, se debe prestar especial atención a los permisos otorgados. Se recomienda que el estudiante:

* Trabaje únicamente dentro de la carpeta del proyecto de la actividad.
* No incorpore al contexto del agente archivos con secretos, API keys o contraseñas.
* Revise los comandos que el agente propone ejecutar antes de aprobarlos.
* Utilice control de versiones, de forma que cualquier cambio no deseado pueda identificarse y revertirse.

Un agente que combina acceso a datos privados, exposición a contenido no confiable y capacidad de comunicación externa presenta un riesgo mayor de filtración de información, por lo que conviene evitar esa combinación en las actividades del curso.

### 2.5 Aprendizaje continuo

Las herramientas de inteligencia artificial evolucionan rápidamente. Por ello, tanto docentes como estudiantes deben adoptar una actitud de aprendizaje permanente, manteniéndose actualizados respecto de nuevas funcionalidades, limitaciones, riesgos y buenas prácticas. Esto es fundamental de ambos lados, por un lado, estar al día promoverá que el estudiante desarrolle competencias que el mercado laboral requiere y desde el lado docente, estar al día permitirá brindar una educación de mejor calidad.

El desarrollo de competencias relacionadas con la IA debe entenderse como un proceso continuo que acompañará la evolución de la profesión a lo largo de la vida laboral. 

## 3. Buenas prácticas docentes

La incorporación de herramientas de inteligencia artificial en la enseñanza de la Ingeniería de Software requiere una planificación cuidadosa y una supervisión constante por parte del cuerpo docente. Si bien estas tecnologías pueden facilitar numerosas tareas docentes y enriquecer las experiencias de aprendizaje, su uso debe responder a objetivos pedagógicos claramente definidos y estar alineado con las competencias que se pretende desarrollar en los estudiantes.

### 3.1 Utilización de IA en la enseñanza

Antes de recurrir a una herramienta de IA, el docente debe identificar con claridad cuál es el propósito de su utilización. La IA debería aplicarse cuando aporte un valor real al proceso de enseñanza y aprendizaje.

Algunas preguntas orientadoras que pueden ayudar a definir si usar o no estas tecnologías son:

* ¿Qué competencia se pretende desarrollar?
* ¿La IA facilitará la comprensión del contenido o la resolución del problema?
* ¿El uso de IA aporta beneficios frente a una metodología tradicional?
* ¿El uso de IA aporta beneficios en un entorno laboral en el que se espera la resolución de problemas similares a los propuestos en el aula?
* ¿Qué aprendizaje se espera que realice el estudiante y cuál será el papel de la IA en ese proceso?

Definir estos objetivos permite seleccionar actividades en las que la IA actúe como un apoyo para el aprendizaje y no como un sustituto del razonamiento del estudiante.

### 3.2 Elección de herramientas

No todas las herramientas de IA ofrecen las mismas capacidades ni son apropiadas para las mismas actividades. Se debe evaluar para cada herramienta a utilizar:

* Capacidad para generar código o documentación
* Precisión y calidad de las respuestas
* Facilidad de uso, acorde al grado de avance de la carrera
* Políticas de privacidad y tratamiento de datos
* Posibilidades de integración con otras herramientas utilizadas en la asignatura (por ejemplo IDEs)
* Disponibilidad para los estudiantes. Se deberá promover aquellas herramientas que la universidad ofrezca licencias o que sean de uso gratuito. 

Resulta recomendable priorizar herramientas ampliamente utilizadas en el ámbito profesional, permitiendo que los estudiantes se familiaricen con tecnologías presentes en la industria.

### 3.3 Diseño de actividades con IA

Las actividades que incorporen herramientas de inteligencia artificial deben diseñarse a partir de los resultados de aprendizaje de la asignatura. La inclusión de una herramienta de IA no debe constituir un objetivo en sí mismo, sino responder a una competencia concreta que se pretenda desarrollar.

Antes de proponer una actividad, el docente deberá definir:

- Qué tareas podrá realizar el estudiante con ayuda de IA.
- Qué partes deberá resolver de forma autónoma.
- Qué conocimientos previos necesita para evaluar las respuestas obtenidas.
- Qué evidencias deberá presentar sobre el proceso seguido.
- Qué mecanismos utilizará para verificar la calidad del resultado.
- Qué criterios se aplicarán para evaluar su trabajo.

Especialmente en asignaturas introductorias, se recomienda una secuencia gradual: en una primera etapa el estudiante resuelve parte de la actividad sin intervención de IA, trabajando directamente sobre los conceptos y criterios de calidad del curso. En una segunda etapa, incorpora la herramienta de IA y utiliza esos mismos criterios para formular instrucciones, evaluar las propuestas generadas y decidir qué aceptar, modificar o descartar. Cerrar la actividad con preguntas de reflexión sobre los resultados obtenidos favorece un enfoque human-in-the-loop, en el que el estudiante mantiene la responsabilidad sobre la validación.

También puede resultar útil proveer un archivo de instrucciones para el agente (por ejemplo `AGENTS.md`) adaptado al nivel del curso. Este tipo de archivo permite restringir el comportamiento de la herramienta para que priorice soluciones simples, evite tecnologías no trabajadas en la asignatura y genere cambios que el estudiante pueda comprender y explicar. En este repositorio se incluye un ejemplo en [AGENTS.md](./AGENTS.md).

### 3.4 Definición de usos permitidos

Cada actividad o evaluación debería indicar explícitamente qué formas de utilización de IA se encuentran permitidas. No es recomendable asumir que una única política puede aplicarse de igual manera a todas las actividades de una asignatura.

La consigna deberá especificar, como mínimo:

- Si el uso de IA está permitido, limitado o no permitido.
- Para qué tareas puede utilizarse.
- Qué herramientas se encuentran autorizadas.
- Qué partes del trabajo deben ser realizadas sin asistencia.
- Cómo debe declararse su utilización.
- Qué evidencias del proceso deben conservarse.
- Qué criterios se utilizarán para evaluar el resultado.

Las reglas deberán comunicarse antes del inicio de la actividad y redactarse de manera clara, evitando expresiones ambiguas como “se permite usar IA de forma responsable” sin explicar qué implica concretamente ese uso responsable.

### 3.5 Evaluación del proceso y del resultado

Cuando una actividad permita utilizar herramientas de inteligencia artificial, la evaluación no debería concentrarse únicamente en el artefacto final. También deberá considerar el proceso mediante el cual el estudiante construyó, validó y justificó la solución.

Por ejemplo, se podría solicitar:

- Historial de versiones o commits.
- Registro resumido de las interacciones con la herramienta.
- Principales instrucciones proporcionadas a la IA.
- Respuestas que fueron descartadas y motivos del descarte.
- Modificaciones realizadas sobre el contenido generado.
- Casos de prueba ejecutados.
- Fuentes utilizadas para verificar las respuestas.
- Reflexión sobre los errores o limitaciones identificados.
- Defensa oral o demostración práctica de la solución.

### 3.6 Desarrollo de competencias en inteligencia artificial

El estudiante no solo debe aprender a utilizar una herramienta, sino también comprender sus principios básicos, posibilidades y limitaciones.

Según el nivel de la asignatura, se recomienda abordar competencias relacionadas con:

- Funcionamiento general de los modelos de lenguaje.
- Naturaleza probabilística de las respuestas.
- Limitaciones del contexto proporcionado.
- Generación de información incorrecta o inexistente.
- Presencia de sesgos en los resultados.
- Elaboración de instrucciones claras y contextualizadas.
- Validación mediante fuentes externas.
- Privacidad y protección de datos.
- Seguridad del código generado.
- Propiedad intelectual y licencias.
- Responsabilidad profesional sobre los resultados.
### 3.7 Equidad en el acceso a las herramientas

Muchas herramientas de IA funcionan mediante suscripciones, y sus planes gratuitos o para estudiantes pueden presentar límites de uso o restringir el acceso a determinados modelos. Además, estos esquemas de precios y límites cambian con frecuencia. Como consecuencia, estudiantes que utilizan modelos de mayor capacidad pueden obtener resultados de mejor calidad que quienes solo acceden a modelos más limitados.

Cuando las herramientas de IA formen parte de actividades o evaluaciones, se recomienda:

- Definir una herramienta de referencia a la que todos los estudiantes puedan acceder sin costo (por ejemplo, GitHub Copilot a través de GitHub Education).
- Diseñar las consignas de forma que puedan resolverse con las capacidades disponibles en esa herramienta de referencia.
- Evaluar principalmente la comprensión, validación y justificación de la solución, y no únicamente el resultado generado.
- Revisar al inicio de cada semestre las condiciones de acceso vigentes para estudiantes.

## 4. Recursos

Se puede acceder a recursos a través del siguiente archivo: [recursos.md](./recursos.md).

En ese archivo se encontrarán blogs, noticias, lecturas sobre buenas prácticas y documentación de las principales herramientas de IA. La selección fue realizada en junio de 2026 y actualizada en septiembre de 2026. Por la naturaleza cambiante de estas herramientas, se recomienda revisar periódicamente los recursos ofrecidos.

## 5. Referencias

Las orientaciones de esta guía se basan en la siguiente bibliografía:

- DORA. *State of AI-assisted Software Development 2025*. https://dora.dev/research/2025/dora-report/
- C. Sengul, R. Neykova y G. Destefanis. *Software engineering education in the era of conversational AI: current trends and future directions*. Frontiers in Artificial Intelligence, 2024. https://doi.org/10.3389/frai.2024.1436350
- M. Vierhauser, I. Groher, T. Antensteiner y C. Sauerwein. *Towards Integrating Emerging AI Applications in SE Education*. CSEE&T, 2024. https://doi.org/10.1109/CSEET62301.2024.10663045
- V. D. Kirova, C. S. Ku, J. R. Laracy y T. J. Marlowe. *Software Engineering Education Must Adapt and Evolve for an LLM Environment*. SIGCSE, 2024. https://doi.org/10.1145/3626252.3630927
- O. Petrovska, L. Clift, F. Moller y R. Pearsall. *Incorporating Generative AI into Software Development Education*. CEP, 2024. https://doi.org/10.1145/3633053.3633057
- E. Parra y S. Willingham. *Towards Implementing and Evaluating AI-Assisted Pull Requests in Software Engineering Education*. CSEE&T, 2025. https://doi.org/10.1109/CSEET66350.2025.00008
- T. Van Dijk y V. Zaytsev. *The Impact of Generative Artificial Intelligence Tools in Project-Based Learning*. 2025. https://doi.org/10.1007/978-3-032-01377-4_3
- W. Takerngsaksiri et al. *Human-In-The-Loop Software Development Agents*. ICSE-SEIP, 2025. https://doi.org/10.1109/ICSE-SEIP66354.2025.00036
- S. Willison. *The lethal trifecta for AI agents: private data, untrusted content, and external communication*. https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
- S. Willison. *Your job is to deliver code you have proven to work*. https://simonwillison.net/2025/Dec/18/code-proven-to-work/
- GitHub. *Acceso a GitHub Copilot gratis como estudiante*. https://docs.github.com/es/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students
