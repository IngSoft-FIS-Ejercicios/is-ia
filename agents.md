# AGENTS.md

# Guía para agentes de IA

Este repositorio forma parte de un curso introductorio de **Fundamentos de Ingeniería de Software**. El objetivo de este archivo es establecer pautas para el uso de asistentes y agentes de inteligencia artificial durante las actividades del curso. Se trata de un curso introductorio en el que los estudiantes cuentan con base de programación orientada a objetos, desarrollo web (js, css, html).

## Objetivo

Los agentes de IA deben utilizarse como herramientas de apoyo al aprendizaje y al desarrollo, sin sustituir la comprensión de los conceptos trabajados en el curso.

El estudiante debe ser capaz de comprender, explicar y justificar cualquier cambio realizado con ayuda de inteligencia artificial.

## Principios generales

- Mantener las soluciones simples. No realizar sobreingeniería a soluciones sencillas.
- Priorizar claridad y legibilidad por sobre soluciones complejas. Utilizar estructuras básicas.
- Evitar introducir bibliotecas externas.
- Evitar utilizar patrones de diseño complejos.
- No introducir tecnologías, bibliotecas o patrones innecesarios.
- Respetar la separación de responsabilidades (La interfaz de usuario debe estar separada del dominio. Si existe un index.js o main.js, no incluir lógica de negocio correspondiente a clases en dicho archivo. Separar estilo (css) de HTML).
- Evitar modificar archivos que no estén relacionados con la tarea solicitada.
- No realizar grandes refactorizaciones salvo que sean necesarias.
- Explicar los cambios importantes realizados.
- No asumir requisitos que no estén definidos en la consigna.

## Código

Al generar o modificar código:

- Utilizar nombres claros para variables, funciones y clases.
- Seguir la guía de estilos de Google para Javascript/Typescript, al menos que se indique lo contrario.
- Mantener funciones pequeñas y fáciles de comprender.
- Evitar código duplicado cuando pueda resolverse de manera sencilla.
- Mantener un estilo consistente con el resto del proyecto.
- No agregar dependencias externas sin una razón clara.
- No modificar funcionalidades existentes que no estén relacionadas con la tarea.
- Evitar crear una clase sistema. La persistencia debe hacerse de forma local, agregando instancias de un objeto a instancias de colecciones. 

El código generado debe poder ser comprendido por estudiantes que se encuentran aprendiendo fundamentos de desarrollo de software.

## Git

Cuando se trabaje con Git:

- No realizar commits automáticamente salvo que se solicite explícitamente.
- No modificar el historial de Git.
- Evitar utilizar `git push --force`, y en caso de que se opte, primero prevenir al estudiante sobre sus riesgos.
- No eliminar ramas o commits sin autorización.
- Antes de proponer un commit, revisar los cambios realizados.

Los mensajes de commit deben ser breves y descriptivos. Deberán seguir la convención establecida por el estudiante.

## Estructura del repositorio

Antes de realizar cambios, revisar la estructura existente del proyecto.

Siempre que sea posible:

```text
src/        Código fuente
docs/       Documentación
**/tests/      Pruebas, si existen. 
README.md   Información general del proyecto
```

No crear nuevas carpetas o reorganizar el proyecto sin una necesidad concreta.

## Tests unitarios

Se utilizará la librería Vitest. 

- No utilizar matchers complejos.
- Seguir una estructura AAA (Arrange, Act y Assert).
- Cada archivo de clase deberá tener su archivo de test.

## README

Si una modificación cambia la forma de ejecutar o utilizar el proyecto, verificar si también es necesario actualizar el archivo `README.md`.

El README debería contener, como mínimo:

- Descripción del proyecto.
- Requisitos necesarios.
- Instrucciones de instalación.
- Instrucciones de ejecución.
- Estructura general del proyecto, cuando corresponda.

## Antes de finalizar una tarea

El agente debe comprobar:

- Que la solución responde a la consigna.
- Que no se modificaron archivos innecesarios.
- Que el código sigue siendo comprensible.
- Que no se introdujeron dependencias innecesarias.
- Que el proyecto puede seguir ejecutándose correctamente.
- Que los cambios realizados pueden ser explicados por el estudiante.

## Uso responsable de IA

La inteligencia artificial puede utilizarse para:

- Explicar código.
- Proponer soluciones.
- Detectar errores.
- Generar ejemplos.
- Mejorar documentación.
- Sugerir pequeñas mejoras.

Sin embargo, el estudiante sigue siendo responsable de revisar y comprender los resultados generados.

Si existen varias soluciones posibles, priorizar la alternativa **más sencilla, clara y fácil de justificar** dentro del contexto de un curso introductorio de Ingeniería de Software.