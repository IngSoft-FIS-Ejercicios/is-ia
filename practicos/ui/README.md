# Práctico — IA para Interfaces de Usuario

# UI Centro cultural

Aplicación web desarrollada con HTML, CSS y JavaScript.

## Objetivo

Detectar, analizar y corregir problemas de accesibilidad, usabilidad y consistencia visual en una interfaz de usuario, usando herramientas de IA integradas al IDE y validando los resultados con criterios de accesibilidad y buenas prácticas de UI.

## Herramientas necesarias

- Visual Studio Code o un IDE compatible con Copilot.
- Copilot Chat (o cualquier otra herramienta similar) en modos Ask, Agent y Plan.
- Navegador web para probar la aplicación.
- WAVE para revisar accesibilidad.

El objetivo de este práctico es aprender a usar herramientas de IA integradas al IDE para diagnosticar, corregir y extender una interfaz de usuario, manteniendo una separación clara entre dominio, UI y estructura HTML/CSS.

La aplicación entregada al inicio del práctico contiene varios problemas de accesibilidad y usabilidad a propósito. El trabajo del estudiante consiste en detectar esos problemas de forma manual, usar la IA para agregar nuevos componentes respetando el diseño de la interfaz existente y, luego, mapear los problemas con las heurísticas de Nielsen y usar la IA para proponer y aplicar mejoras sin romper la arquitectura existente.

---

# Estructura del proyecto

- `src/interface/index.html`: Contiene la estructura semántica de la interfaz.
- `src/interface/styles.css`: Contiene los estilos visuales y el sistema de diseño.
- `src/interface/ui.js`: Contiene funciones de renderizado y componentes de UI.
- `src/domain/*.js`: Contiene clases y datos del dominio.
- `src/app.js`: Contiene la lógica de orquestación entre dominio y UI.

---

# Cómo ejecutar

1. Instalar dependencias con `npm install`.
2. Levantar la aplicación con `npm run dev`. Se abrirá el navegador en `http://localhost:5173/src/interface/index.html`.
3. Ejecutar el linter con `npm run lint`.

Antes de comenzar, copiar el archivo [AGENTS.md](../../AGENTS.md) en la raíz de la carpeta abierta en el IDE, para que el agente siga las pautas del curso.

---

# Parte 0 — Levantar la app y detectar problemas (sin IA)

## Objetivo

Abrir la aplicación, recorrerla como usuario real y detectar problemas de usabilidad. Esta parte se resuelve de forma manual, sin utilizar herramientas de IA.

## Actividades

1. Levantar la app en el navegador.
2. Navegarla con mouse y teclado.
3. Identificar problemas de accesibilidad, jerarquía visual y consistencia.
4. Registrar qué pantalla o componente falla y por qué.
5. Ejecutar WAVE sobre la página y registrar los errores y alertas reportados.

## Pistas para observar

- Contraste insuficiente entre texto y fondo.
- Elementos interactivos sin etiqueta clara.
- Jerarquía visual poco evidente.
- Uso incorrecto de títulos, listas o regiones semánticas.
- Feedback pobre al interactuar con formularios o botones.
- Problemas de foco o navegación por teclado.

---

# Parte 1 — Nuevos componentes

## Objetivo

Usar la IA para agregar nuevos componentes que sigan el estilo de la interfaz existente y obliguen a reutilizar componentes y decisiones visuales.

## Antes de implementar

Usar Copilot Chat en modo Ask para comprender la interfaz existente:

1. ¿Qué hace la aplicación y cuál es su flujo principal?
2. ¿Qué archivos parecen responsables de la estructura, el estilo y la lógica?
3. ¿Qué componentes y decisiones visuales (colores, tipografía, tarjetas, botones) conforman el sistema de diseño actual?

Contrastar las respuestas con los archivos del proyecto y corregir cualquier afirmación que no coincida con el código.

## Actividad 1 — Nueva pantalla

Usando el modo Agent, agregar una pantalla de ayuda contextual.

Requerimientos:

- Debe seguir el mismo lenguaje visual que la pantalla principal.
- Debe reutilizar la estructura base de la UI.
- Debe ser accesible con teclado y lectores de pantalla.
- Debe respetar la separación entre dominio, UI y estilos.
- La IA debe ayudar a definir la estructura, no reemplazar el criterio del estudiante.

Antes de pedir los cambios:

- Pedirle a la IA una propuesta de layout coherente con la pantalla existente.
- Pedirle que explique qué componente se reutiliza y cuál nuevo hace falta.
- Verificar que la nueva pantalla no rompa la navegación principal.

Después de implementar:

- Navegar hacia la pantalla de ayuda con mouse y teclado.
- Verificar que el estilo sea consistente con la pantalla principal.
- Revisar que la IA no haya mezclado lógica de dominio dentro de HTML o CSS.

---

# Parte 2 — Heurísticas de Nielsen

## Objetivo

Identificar los problemas de usabilidad de acuerdo con las heurísticas de Nielsen y corregirlos utilizando IA, con foco en accesibilidad, semántica y consistencia visual.

## Análisis con Ask

Antes de pedir cambios a la IA, seleccionar al menos tres problemas detectados manualmente en la Parte 0 y justificar con qué heurística o criterio de accesibilidad se relacionan.

Luego, responder las siguientes preguntas usando Copilot Chat en modo Ask:

1. ¿Qué problemas de accesibilidad y usabilidad presenta la aplicación (incluyendo la pantalla agregada en la Parte 1)?
2. ¿Qué heurísticas de Nielsen se ven afectadas en cada problema?
3. ¿Qué problemas detectó la IA que no habías detectado manualmente? ¿Y cuáles detectaste vos que la IA no mencionó?

## Actividad 2 — Corregir accesibilidad y usabilidad

La primera versión de la interfaz incumple varias heurísticas de Nielsen y presenta problemas de accesibilidad. Se le debe pedir a la IA, usando modo agente, corregir estos problemas, relacionando cada cambio con la heurística o criterio que corresponde.

Requerimientos:

- Mejorar contraste y legibilidad.
- Corregir etiquetas, títulos y landmarks semánticos.
- Hacer que el formulario sea entendible y usable con teclado.
- Dar feedback claro de errores, estados vacíos o acciones exitosas.
- Mantener una estética consistente sin perder personalidad visual.
- No mezclar dominio con HTML ni estilos con lógica.
- Verificar resultados obtenidos con WAVE

Validación:
- Ejecutar nuevamente WAVE.
- Probar navegación por teclado.
- Comparar los problemas originales con los problemas corregidos.
- Revisar que la IA no haya mezclado lógica de dominio dentro de HTML o CSS.

---

# Parte 3 — Plan (opcional)

## Objetivo

Usar Plan Mode para encarar una mejora más grande con pasos claros y verificables.

## Actividad 3 — Rediseño guiado por IA

Plantear un rediseño moderado de la interfaz, sin cambiar la funcionalidad principal.

Requerimientos:

- Mejorar jerarquía visual.
- Mejorar estados vacíos y mensajes de ayuda.
- Hacer consistente el uso de botones, tarjetas, formularios y navegación.
- Mantener el código legible y modular.

Antes de aprobar el plan:

- Revisar si respeta Nielsen.
- Revisar si respeta la separación de capas.
- Revisar si el alcance es razonable para el tiempo de clase.

Después de aplicar el rediseño:
- Ejecutar una revisión visual y de accesibilidad.
- Registrar qué sugerencias de la IA se descartaron y por qué.

---

# Parte 4 — Reflexión

Responder brevemente:

1. ¿Qué problemas de usabilidad detectaste al ejecutar la app?
2. ¿Qué heurísticas de Nielsen fueron las más útiles para guiar los cambios?
3. ¿Qué prompts dieron mejores resultados?
4. ¿Qué errores cometió la IA?
5. ¿Qué parte tuvo que corregirse manualmente?
6. ¿La nueva pantalla siguió el estilo de la interfaz original? ¿Heredó alguno de los problemas de usabilidad de la interfaz original?
7. ¿La separación entre dominio, UI y HTML/CSS quedó clara?

---

# Recomendaciones

- Levantar la app antes de pedir cambios.
- Describir el problema con precisión y no solo el síntoma.
- Pedirle a la IA que relacione cada cambio con una heurística de Nielsen.
- Revisar siempre el código generado.
- Mantener la lógica fuera de HTML y CSS.
- Validar navegación por teclado, contraste y semántica.

---

# Importante

La IA es una herramienta de asistencia.

Todo el código generado debe ser:

- comprendido,
- revisado,
- y validado antes de considerarse correcto.

# Recursos
- [Configuración de agentes en VSCode](https://code.visualstudio.com/docs/agents/agents-tutorial)
- [WAVE](https://wave.webaim.org/extension/)
- [Heurísticas de Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Pautas de accesibilidad WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/es)
- [Documentación Bootstrap](https://getbootstrap.com/)
- [Documentación HTML](https://www.w3schools.com/html/)
