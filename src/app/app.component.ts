import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  firstRecipe: Recipe = new Recipe("pb&j sandwich", "bread, peanut butter, jelly", "spread peanut butter on one slice of bread and jelly on the other. Stick together. Eat.");
}
