import { Recipe } from './../recipe-book.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
    @Output() recipeWasSel = new EventEmitter<Recipe>();
    name = name;
    recipes: Recipe[] = [
        new Recipe('Test Soup', 'This is a dummy recipe', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Shrimp_and_corn_chowder.jpg'),
        new Recipe('Another Test Soup', 'This is a dummy recipe', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Shrimp_and_corn_chowder.jpg'),
        
    ];

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSel.emit(recipe)

    }

}