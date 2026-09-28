import { Recipe } from "./domain/recipe.js";
import { RecipeBook } from "./domain/recipe_book.js";

const myRecipeBook = new RecipeBook();

// Referencias a elementos del DOM
const recipeForm = document.getElementById("recipe-form");
const inpName = document.getElementById("inp-name");
const inpIngredients = document.getElementById("inp-ingredients");
const addErrorContainer = document.getElementById("add-error-container");
const addErrorMsg = document.getElementById("add-error-msg");

// Manejo del evento para agregar receta
recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const recipeData = getFormData();
    const recipe = createRecipe(recipeData);
    addRecipeToBook(recipe);
    clearForm();
    hideError();
    updateUI();
  } catch (error) {
    showError(error);
  }
});

/**
 * Obtiene los datos del formulario de nueva receta
 * @returns {Object} Objeto con name, ingredients y difficulty
 */
function getFormData() {
  const name = inpName.value?.trim();
  const ingredients = parseIngredients(inpIngredients.value);
  // TODO: obtener la dificultad del formulario
  
  return { name, ingredients };
}

/**
 * Parsea la cadena de ingredientes separados por comas
 * @param {string} ingredientsString - Cadena con ingredientes separados por comas
 * @returns {string[]} Array de ingredientes limpios
 */
function parseIngredients(ingredientsString) {
  return (ingredientsString || "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * Crea una nueva instancia de Recipe con los datos proporcionados
 * @param {Object} recipeData - Objeto con name, ingredients y difficulty
 * @returns {Recipe} Nueva instancia de Recipe
 */
function createRecipe(recipeData) {
  // TODO: crear la receta con la dificultad
  return new Recipe(recipeData.name, recipeData.ingredients);
}

/**
 * Agrega una receta al recetario
 * @param {Recipe} recipe - Instancia de Recipe a agregar
 */
function addRecipeToBook(recipe) {
  myRecipeBook.addRecipe(recipe);
}

/**
 * Limpia todos los campos del formulario
 */
function clearForm() {
  inpName.value = "";
  inpIngredients.value = "";
  // TODO: limpiar el campo de dificultad
}

/**
 * Muestra un mensaje de error en el formulario
 * @param {Error|string} error - Error a mostrar
 */
function showError(error) {
  addErrorContainer.classList.remove("d-none");
  addErrorMsg.innerText = String(error);
}

/**
 * Oculta el mensaje de error del formulario
 */
function hideError() {
  addErrorContainer.classList.add("d-none");
}

/**
 * Actualiza la interfaz de usuario después de agregar una receta
 */
function updateUI() {
  updateAllRecipesList();
  // TODO: actualizar el total por dificultad en el panel Inicio
}

/**
 * Actualiza la lista de todas las recetas en la tab "Todas"
 */
function updateAllRecipesList() {
  const emptyList = document.getElementById("empty-todas-list");
  const listContainer = document.getElementById("todas-list-container");
  const list = document.getElementById("todas-list");
  
  // Limpiar la lista actual
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  const recipes = myRecipeBook.getAll();
  
  if (recipes.length === 0) {
    emptyList.classList.remove("d-none");
    listContainer.classList.add("d-none");
  } else {
    emptyList.classList.add("d-none");
    listContainer.classList.remove("d-none");
    
    recipes.forEach((recipe) => {
      const card = createRecipeCard(recipe);
      list.appendChild(card);
    });
  }
}

/**
 * Crea un card de Bootstrap para mostrar una receta
 * @param {Recipe} recipe - Receta a mostrar
 * @returns {HTMLElement} Elemento div con el card de la receta
 */
function createRecipeCard(recipe) {
  const cardCol = document.createElement("div");
  cardCol.className = "col";
  
  const card = document.createElement("div");
  card.className = "card recipe-card h-100";
  
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  
  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = recipe.getName();
  
  const ingredients = document.createElement("p");
  ingredients.className = "card-text";
  const ingredientsList = recipe.getIngredients?.() || [];
  ingredients.innerText = `Ingredientes: ${ingredientsList.join(", ")}`;
  
  cardBody.appendChild(title);
  cardBody.appendChild(ingredients);
  card.appendChild(cardBody);
  cardCol.appendChild(card);
  
  return cardCol;
}

// Inicializar la UI al cargar la página
updateUI();
