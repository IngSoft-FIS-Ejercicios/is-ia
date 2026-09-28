import { Recipe } from "./recipe.js";

export class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    if (!(recipe instanceof Recipe)) {
      throw new Error("Debe ser una instancia de Recipe");
    }
    this.recipes.push(recipe);
  }

  getAll() {
    return this.recipes;
  }

  countByEasyDifficulty() {
    // TODO: implementar la función que cuente recetas por dificultad
  }

  countByMediumDifficulty() {
    // TODO: implementar la función que cuente recetas por dificultad
  }

  countByHardDifficulty() {
    // TODO: implementar la función que cuente recetas por dificultad
  }
}
