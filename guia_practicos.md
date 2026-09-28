# Guía de los prácticos

## Introducción

Esta guía resume de manera general los prácticos de la carpeta. La información específica de cada uno está desarrollada en sus respectivos README. Esta guía presenta una orientación breve para entender el recorrido general de aprendizaje, junto con recomendaciones para su uso en clase.

### Objetivo general

Los prácticos buscan acompañar un proceso progresivo de aprendizaje de los contenidos del curso, pasando por la comprensión de conceptos, su aplicación en ejercicios concretos y la resolución cada vez más autónoma de problemas. Se busca que los estudiantes usen herramientas de IA, en particular agentes de codificación, para los problemas de Ingeniería de Software planteados en el curso (interfaz de usuario, testing y buenas prácticas de codificación).

En términos generales, se espera que permitan:

- Entender la consigna y el objetivo de cada actividad.
- Aplicar conceptos del curso en situaciones prácticas.
- Desarrollar criterio para resolver problemas con herramientas de Inteligencia Artificial (IA).
- Organizar el trabajo de manera clara y ordenada.
- Reforzar buenas prácticas de análisis, implementación y documentación.
- Validar de forma crítica los resultados generados por la IA, manteniendo un enfoque human-in-the-loop.

### Estructura de los prácticos

Salvo el práctico introductorio, los prácticos siguen una misma estructura:

1. **Resolución manual:** el estudiante resuelve una primera parte sin intervención de herramientas de IA, trabajando directamente sobre los conceptos y criterios de calidad propios del curso.
2. **Resolución con IA:** el estudiante utiliza la herramienta de IA, aplicando las buenas prácticas vistas en el curso (codificación, testing o interfaz de usuario) a la elaboración de prompts y validando posteriormente los resultados. No se busca únicamente generar código, sino que el contenido generado cumpla con los criterios de calidad del curso.
3. **Reflexión:** cada práctico cierra con preguntas que guían al estudiante hacia una reflexión sobre los conceptos de la unidad y un análisis crítico de los resultados obtenidos con la IA.

### Herramienta de referencia

Los prácticos fueron diseñados tomando GitHub Copilot como herramienta de referencia, ya que los estudiantes verificados mediante GitHub Education pueden acceder sin costo a GitHub Copilot Student ([ver instrucciones](https://docs.github.com/es/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students)). Se utilizan sus tres modos principales:

- **Ask:** consultar y explorar el proyecto sin modificar archivos.
- **Plan:** generar una estrategia de ejecución que debe revisarse y aprobarse antes de realizar cambios.
- **Agent:** delegar la ejecución de una tarea, permitiendo que el agente modifique archivos y ejecute comandos.

Los objetivos de los prácticos no están ligados exclusivamente a GitHub Copilot. Gran parte de las actividades se orientan a la elaboración de instrucciones, la gestión del contexto, el uso de agentes y la validación de resultados, por lo que pueden adaptarse a otras herramientas con capacidades equivalentes (por ejemplo Claude Code, Codex, Cursor o Antigravity).

### Archivo AGENTS.md

Como complemento de los prácticos, se incluye el archivo [AGENTS.md](./AGENTS.md). Mientras que las consignas definen qué debe aprender y realizar el estudiante, este archivo establece pautas para orientar el comportamiento del agente dentro del contexto de Fundamentos de Ingeniería de Software: priorizar soluciones simples y justificables, respetar la separación de responsabilidades, no introducir tecnologías no trabajadas en el curso, usar Git y testing de forma adecuada, y generar cambios que el estudiante pueda comprender y explicar.

Para que la herramienta lo tome en cuenta, el archivo debe encontrarse en la raíz de la carpeta que se abre en el IDE. Si el estudiante abre únicamente la carpeta de un práctico (por ejemplo `practicos/testing`), debe copiar `AGENTS.md` dentro de esa carpeta. En VS Code, verificar que la opción `chat.useAgentsMdFile` se encuentre habilitada.

### Objetivos por práctico

#### Práctico 1 - Introductorio

Acompaña el material teórico [material_teorico.md](./material_teorico.md). El foco está en que el estudiante pueda configurar correctamente la herramienta, integrarla al IDE y tener un primer acercamiento a las diferentes modalidades de interacción. Consta de dos etapas principales y una etapa opcional:

- **Ask:** familiarizarse con esta modalidad, trabajar el uso adecuado del contexto (por ejemplo, seleccionando archivos determinados) y comprender el código existente, su lógica y su estructura.
- **Agent:** agregar nuevas funcionalidades bajo una serie de criterios de aceptación, aplicando buenas prácticas de prompt engineering, iterando sobre la solución y validando los cambios realizados por la herramienta.
- **Plan (opcional):** implementar funcionalidades de mayor complejidad incorporando una instancia de planificación previa a la ejecución.

En conjunto, estas etapas permiten trabajar las diferencias entre consultar, planificar y delegar la ejecución de una tarea.

#### Práctico 2 - Interfaz de Usuario

En este práctico se busca combinar la unidad temática de interfaz de usuario (UI) y accesibilidad vistas en el curso. Este práctico está pensado para ser planteado de manera posterior a un práctico introductorio de este tema, en el cual los estudiantes se deben haber enfrentado sin herramientas de IA al uso de WAVE y conceptos básicos de formularios con HTML y Bootstrap.

Este práctico combina aspectos teóricos como las heurísticas de Nielsen y herramientas de IA. La primera parte se resuelve de forma manual: el estudiante recorre la aplicación e identifica problemas de usabilidad y accesibilidad. Posteriormente, se presenta el desafío de agregar nuevos componentes mediante la IA, en el que el estudiante tendrá que, a través de uno o varios prompts, generar una interfaz de usuario consistente con el sistema de diseño ya existente. Luego, debe ser capaz de relacionar, de forma crítica, los problemas detectados con las heurísticas de Nielsen y corregirlos mediante el uso de IA. Por último, se realizan preguntas para reflexionar sobre estos conceptos y sobre los resultados obtenidos mediante la herramienta.

#### Práctico 3 - Testing

Este práctico presenta al estudiante un desafío en el que deberá aplicar conceptos de testing (unitario y exploratorio). El estudiante deberá:

- Realizar algunos tests unitarios de forma manual, siguiendo la estructura AAA (Arrange, Act, Assert) sugerida por el curso.
- Entender un dominio existente con ayuda de IA, utilizando el modo Ask.
- Generar casos de prueba exploratorios con apoyo de IA, ejecutarlos y validarlos.
- Realizar, con apoyo de IA, un análisis de casos borde y generar los tests necesarios para llegar al 100 % de cobertura.
- Completar funcionalidades y corregir validaciones del dominio siguiendo buenas prácticas.
- Mantener la separación entre dominio y pruebas.

#### Práctico 4 - Integrador

Este práctico tiene como objetivo abarcar varias de las unidades temáticas del curso de forma simultánea (control de versiones, UI, codificación y testing). Como objetivo general se espera:

- Implementar nuevas funciones de lógica de dominio.
- Codificar tests unitarios en paralelo a la implementación.
- Usar buenas prácticas de codificación.
- Modificar la interfaz de usuario para usar las nuevas funciones.
- Registrar el avance mediante commits e issues.

Además, se espera que se utilicen herramientas de IA para potenciar los objetivos anteriormente mencionados.

### Requisitos técnicos

| Práctico | Requisitos | Cómo ejecutar |
|---|---|---|
| Introductorio | Navegador web | Abrir `src/interface/index.html` en el navegador |
| Interfaz de Usuario | Node.js 18 o superior | `npm install` y `npm run dev` |
| Testing | Node.js 18 o superior | `npm install`, `npm run dev`, `npm run test` y `npm run lint` |
| Integrador | Node.js 18 o superior | `npm install`, `npm run dev`, `npm run test` y `npm run lint` |

Todos los prácticos requieren Visual Studio Code (o un IDE compatible) con GitHub Copilot configurado.

### Recomendaciones para el docente

- Presentar el material teórico antes del práctico introductorio y verificar en clase que todos los estudiantes tengan la herramienta configurada.
- Respetar el orden de cada práctico: no habilitar el uso de IA hasta que el estudiante haya completado la parte manual.
- Explicitar en cada instancia qué usos de IA están permitidos, siguiendo la [guía docente](./guia_docente.md).
- Utilizar las preguntas de reflexión como disparador de una puesta en común, poniendo el foco en los errores de la IA detectados y en cómo fueron validados los resultados.
- Solicitar evidencias del proceso (commits, prompts principales, cambios aceptados y descartados) y no únicamente el resultado final.
- Revisar antes de cada semestre que las dependencias de los proyectos se instalen correctamente y que los modos de la herramienta de referencia no hayan cambiado.

### Recomendación de estudio

Para aprovechar mejor cada práctico, conviene:

1. Leer primero el README completo
2. Identificar qué se pide y qué se debe entregar
3. Dividir el ejercicio en partes pequeñas
4. Resolver manualmente la primera parte cuando la consigna lo indique
5. Usar IA como apoyo para analizar, proponer o implementar mejoras
6. Resolver y probar cada parte por separado
7. Revisar el resultado final con la consigna y con los criterios de aceptación
8. Registrar qué se aceptó, qué se corrigió y cómo se validó lo generado por IA
9. Comunicar a los docentes ante cualquier inconveniente detectado con estas herramientas
