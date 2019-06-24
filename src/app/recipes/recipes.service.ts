import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

}