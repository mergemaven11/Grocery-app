import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-shoppingList-edit',
    templateUrl: './shoppingList-edit.component.html'
})

export class ShoppingListEditComponent {
    @ViewChild('nameInput', { static: false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

    @Output() ingredientAdded = new EventEmitter<Ingredient>();


    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.ingredientAdded.emit(newIngredient);
    }
}
