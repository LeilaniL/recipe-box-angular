import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  recipes: Recipe[] = [
    new Recipe("pb&j sandwich", "bread, peanut butter, jelly", "spread peanut butter on one slice of bread and jelly on the other. Stick together. Eat."),
    new Recipe("Ham & Cheese Sandwich", "bread, ham, cheese", "Put a piece of ham and cheese between two pieces of bread and enjoy.")
  ]
  // selectedRecipe = null;

  showDetails(clickedRecipe) {
    console.log(clickedRecipe);
    clickedRecipe.selected = true;
  }
}
