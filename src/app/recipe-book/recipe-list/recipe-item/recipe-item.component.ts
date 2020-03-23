import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe-book.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent {

    @Input() recipe: Recipe;
    @Output() selectedRecipe = new EventEmitter<void>();

    onRecipeSel() {
        this.selectedRecipe.emit()
    }

}