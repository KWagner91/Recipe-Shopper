import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>() ;

    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'Recipe Description', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'),
        new Recipe('Test Recipe 2', 'Recipe Description', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d')
      ];

    getRecipes() {
        return this.recipes.slice();
    }


}