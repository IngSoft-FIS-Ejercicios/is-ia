# Práctico — Codificación Asistida por IA

# Movie Tracker

Aplicación web desarrollada utilizando HTML, Bootstrap y JavaScript Vanilla.

El objetivo de este práctico es utilizar herramientas de IA generativa integradas al IDE para comprender, modificar y extender una aplicación existente.

---

# Estructura del proyecto

- `src/interface/index.html`: Contiene la estructura principal de la interfaz.
- `src/interface/styles.css`: Contiene estilos personalizados.
- `src/interface/ui.js`: Contiene funciones relacionadas al renderizado de la interfaz.
- `src/domain/Movie.js`: Contiene la clase `Movie`.
- `src/domain/movies.js`: Contiene las instancias iniciales de películas.
- `src/app.js`: Contiene la lógica principal de la aplicación.
- `assets/`: Contiene las imágenes locales de las películas.

---

# Cómo ejecutar

No requiere instalar dependencias. Abrir el archivo `src/interface/index.html` en el navegador.

---

# Parte 0 — Configuración

## Objetivo

Configurar la herramienta de IA e integrarla al IDE.

## Actividades

1. Verificar la cuenta de estudiante en [GitHub Education](https://docs.github.com/es/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students) para acceder a GitHub Copilot sin costo.
2. Abrir Visual Studio Code, iniciar sesión con la cuenta de GitHub y abrir la vista de chat de Copilot.
3. Abrir en VS Code la carpeta `practicos/introductorio`.
4. Copiar el archivo [AGENTS.md](../../AGENTS.md) en la raíz de la carpeta abierta, para que el agente siga las pautas del curso.
5. Identificar en el chat cómo se cambia entre los modos Ask, Agent y Plan.

---


# Parte 1 — Ask

## Objetivo

Utilizar Copilot Chat en modo Ask para comprender el proyecto y trabajar el uso adecuado del contexto.

---

## Actividades

Responder las siguientes preguntas utilizando Copilot. Para cada pregunta, seleccionar como contexto únicamente los archivos relevantes (por ejemplo, usando `#file:app.js`) y comparar la respuesta con la obtenida sin seleccionar archivos:

1. ¿Qué hace la aplicación?
2. ¿Qué tecnologías utiliza?
3. ¿Qué archivo contiene la lógica principal?
4. ¿Dónde se almacenan las películas?
5. ¿Cómo se renderizan las cards de películas?
6. ¿Cómo funciona el formulario para agregar películas?
7. ¿Qué validaciones existen actualmente?
8. ¿Qué archivos habría que modificar para agregar nuevas funcionalidades?

Antes de pasar a Agent, contrastar las respuestas con los archivos del proyecto y corregir cualquier afirmación que no coincida con el código.

---

# Parte 2 — Agent

## Objetivo

Utilizar Agent Mode para modificar automáticamente el proyecto, cumpliendo con los criterios de aceptación de cada actividad.

Al escribir los prompts, aplicar las buenas prácticas vistas en el [material teórico](../../material_teorico.md): ser específico, indicar los archivos involucrados, explicitar restricciones (por ejemplo, no agregar bibliotecas externas y mantener la lógica fuera de `ui.js`) y pedir a la IA que pregunte si le falta información. Si el resultado no cumple los requerimientos, iterar refinando el prompt.

---

## Actividades

### Actividad 1 — Eliminar películas

Agregar un botón para eliminar películas de la lista.

Requerimientos:
- Cada card debe tener un botón de eliminar.
- La película debe desaparecer automáticamente de la interfaz.
- No debe recargarse la página.

Validación:
- Probar eliminar una película existente desde el navegador.
- Revisar qué archivos modificó la IA y explicar por qué esos cambios eran necesarios.

---

### Actividad 2 — Sistema de favoritos

Agregar un sistema de favoritos.

Requerimientos:
- El usuario debe poder marcar películas favoritas.
- Las favoritas deben tener una apariencia visual distinta.
- Debe existir un ícono o badge indicando favoritos.

Validación:
- Probar marcar y desmarcar al menos dos películas.
- Verificar que el cambio visual no oculte información importante de la card.

---

### Actividad 3 — Contador

Agregar un contador con la cantidad total de películas.

Ejemplo:

`Total de películas: 8`

Validación:
- Verificar que el contador se actualice al agregar y al eliminar películas.

---

# Parte 3 — Plan (opcional)

## Objetivo

Utilizar Plan Mode para implementar funcionalidades más grandes, incorporando una instancia de planificación previa a la ejecución.

---

## Actividad 4 — Buscador dinámico

Implementar un buscador de películas.

Requerimientos:
- Debe existir un input de búsqueda.
- La búsqueda debe funcionar en tiempo real.
- Debe buscar por título.
- No debe distinguir mayúsculas/minúsculas.

Antes de implementar:
- Revisar el plan generado por Copilot.
- Analizar los pasos propuestos.
- Aprobar el plan únicamente si tiene sentido.

Después de implementar:
- Probar búsquedas con mayúsculas, minúsculas y texto inexistente.
- Confirmar que agregar, eliminar y marcar favoritos sigue funcionando.

---

# Parte 4 — Reflexión

Responder brevemente:

1. ¿Qué prompts funcionaron mejor?
2. ¿Qué errores cometió la IA?
3. ¿Qué cambios tuvieron que corregir manualmente?
4. ¿Qué funcionalidad fue más fácil implementar con IA?
5. ¿Qué limitaciones encontraron?
6. ¿La IA entendió correctamente el proyecto?
7. ¿Qué diferencia notaron en las respuestas al seleccionar archivos específicos como contexto?
8. ¿Qué diferencias encontraron entre consultar (Ask), planificar (Plan) y delegar la ejecución (Agent)? ¿Qué nivel de supervisión requirió cada modo?

---

# Recomendaciones

- Revisar siempre el código generado.
- Verificar los archivos modificados.
- No aceptar cambios automáticamente.
- Realizar prompts específicos y claros.
- Refinar prompts si el resultado no es correcto.

---

# Importante

La IA es una herramienta de asistencia.

Todo el código generado debe ser:
- comprendido,
- revisado,
- y validado antes de considerarse correcto.

# Recursos
- [Configuración de agentes en VSCode](https://code.visualstudio.com/docs/agents/agents-tutorial)
- [Acceso a GitHub Copilot gratis como estudiante](https://docs.github.com/es/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students)
- [Buenas prácticas Prompt Engineering - GitHub](https://github.blog/ai-and-ml/generative-ai/prompt-engineering-guide-generative-ai-llms/)
- [Documentación Bootstrap](https://getbootstrap.com/)
