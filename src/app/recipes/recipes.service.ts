import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>() ;

    private recipes: Recipe[] = [
        new Recipe('Wiener Schnitzel', 
        'An awsome Austrian Schnitzel', 
        'https://live.staticflickr.com/7325/9299930183_72ce8e5424_b.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Fries', 50)
        ]),
        new Recipe('Kaiserschmarrn', 
        'A Tasty Austrian Sweet fresh out of the oven', 
        'https://upload.wikimedia.org/wikipedia/commons/0/0a/Kaiserschmarrn_gro%C3%9F.jpg',
        [
            new Ingredient('Eggs', 4),
            new Ingredient('Butter', 1),
            new Ingredient('Sugar', 2)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }


}