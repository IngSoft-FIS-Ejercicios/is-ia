# Ejercicio Recetario

## Objetivos

- Implementar nuevas funciones de lógica de dominio  
- Codificar test unitarios en paralelo a la implementación  
- Usar buenas prácticas de codificación  
- Modificar la interfaz de usuario para usar las nuevas funciones  

### Aspectos a tener en cuenta

- Los comentarios `// TODO` deben ser reemplazados por código para implementar las nuevas funciones.  
- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.  
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.  
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.  
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.  
- Ejecute el linter con `npm run lint` para eliminar errores y warnings.  

> Recuerde al finalizar cada parte:
>
> - realizar commit / push  
> - subir un issue con screenshots  

---

### Estructura del proyecto

- `domain/recipe.js`: Contiene la clase `Recipe`.
- `domain/recipe_book.js`: Contiene la clase `RecipeBook`, que agrupa recetas.
- `domain/tests/`: Contiene los tests unitarios del dominio.
- `index.html`, `styles.css` y `main.js`: Contienen la interfaz de usuario (Bootstrap).

### Setup inicial

Requisitos: Node.js 18 o superior.

1. Instalar dependencias con `npm install`.
2. Levantar la app con `npm run dev` y abrir en el navegador la dirección que se indica en consola (por defecto `http://localhost:5173`).
3. Ejecutar los tests con `npm run test`. Se muestra en consola el reporte de cobertura y se genera un reporte en HTML en `coverage/lcov-report/index.html`.
4. Ejecutar el linter con `npm run lint`.
5. Copiar el archivo [AGENTS.md](../../AGENTS.md) en la raíz de la carpeta abierta en el IDE, para que el agente siga las pautas del curso.

---

### Parte A

0. Revisá manualmente el proyecto y luego utilizá la IA para contrastar tus respuestas:
   - ¿Dónde se encuentran implementadas la interfaz de usuario y las clases del dominio? ¿Cómo se puede mantener la separación entre ambos aspectos? ¿Cómo se comunican entre sí?
   - ¿Dónde se encuentran los tests unitarios del proyecto?
   - ¿Cómo se encuentran organizados los archivos de test respecto al dominio?
   - ¿Qué respuestas de la IA corregiste o completaste después de revisar los archivos?
1. En la clase `Recipe` agregar el campo `difficulty`.  
   - El campo representa la dificultad de la receta (`"fácil"`, `"media"` o `"difícil"`).  
   - Implementar manualmente, sin IA, las funciones `getDifficulty()` y `setDifficulty()` validando que el valor recibido sea válido.  
   - Pedirle a la IA que modifique la función `toString()` para mostrar la dificultad.
   - Codificar manualmente, sin IA, test unitarios para las nuevas funciones.
     - Incluir test para casos de error.  
     - La cobertura de los test unitarios debe alcanzar el 100 %. En caso de que el informe dé un valor inferior, pedirle a la IA que agregue los casos faltantes.
     - Revisar que los tests agregados sean pertinentes y no solo estén escritos para aumentar cobertura.
     - Usando el modo agente, refactorear los tests para que tengan una estructura de AAA (Arrange, Act y Assert).
     - Usando el modo plan, pedirle a la IA que planifique tests con casos de prueba interesantes. En caso de que aplique, implementarlos con la herramienta. 

2. En la clase `RecipeBook` implementar las funciones `countByEasyDifficulty()`, `countByMediumDifficulty()` y `countByHardDifficulty()` que retornan el total de recetas agrupadas por dificultad, junto con sus tests unitarios (incluyendo el caso de un recetario vacío). Pueden implementarse con ayuda de la IA, indicando en el prompt las buenas prácticas de codificación vistas en el curso.

> Alternativamente se puede implementar la función `countByDifficulty()` que retorna un objeto con el total de recetas agrupadas por dificultad.  
   Ejemplo:  
   ```js
   { facil: 3, media: 2, dificil: 1 }
   ```

### Parte B

Agregar elementos a la interfaz de usuario para usar las nuevas funciones.

1. Campo 'Dificultad' en el formulario 'Nueva receta'.  
   - El campo debe permitir seleccionar entre `"fácil"`, `"media"` o `"difícil"`. Utilizar un dropdown. Pedirle a la IA que lo realice con el mismo estilo que el resto de la página (recomendación: ver si se usa algún framework para la interfaz de usuario y pedirle que lo realice en base a eso).

2. Mostrar el número de las recetas por dificultad en el panel 'Inicio', en el campo correspondiente.  
   - Se debe mostrar el número de recetas agrupadas por cada nivel de dificultad usando las funciones por dificultad (o la función `countByDifficulty()`, en caso de que se haya implementado de esta manera).

3. Modificar el componente de la card de receta (mostrada en el panel 'Todas') para mostrar la dificultad de la receta.

4. Ejecutar ESLint con `npm run lint` para eliminar errores y warnings. En caso de que haya algún error que desconozcas, apóyate en el modo ask para poder resolverlos. 

5. Subir un issue 'Parte B' con screenshot de la página en el navegador (paneles Inicio y Nueva receta).

6. Validar el flujo completo:
   - Crear recetas con cada dificultad.
   - Verificar que los contadores se actualicen correctamente.
   - Confirmar que la card de cada receta muestra la dificultad.
   - Ejecutar `npm run test` y revisar el reporte de cobertura.

### Reflexión final

Responder brevemente:

1. Qué partes resolviste manualmente antes de pedir ayuda a la IA.
2. Qué cambios generados por IA aceptaste y por qué.
3. Qué cambios generados por IA rechazaste o corregiste.
4. Cómo verificaste que la UI y el dominio siguieran separados.
5. Qué evidencia usaste para afirmar que los tests son adecuados además de la cobertura.

# Recursos
- [Configuración de agentes en VSCode](https://code.visualstudio.com/docs/agents/agents-tutorial)
- [Documentación Vitest](https://vitest.dev/guide/)
- [Documentación JavaScript](https://www.w3schools.com/js/)
- [Documentación Bootstrap](https://getbootstrap.com/)
- [Documentación HTML](https://www.w3schools.com/html/)
