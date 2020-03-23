import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
   @Input() recipe: Recipe;
    
}