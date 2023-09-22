import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  title = 'rapp';
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      new Recipe(
        'Banana Bread',
        'Baba recipe for making banana bread.',
        null,
        null, "assets/banana-bread.jpg"),
      new Recipe(
        'Fish Curry',
        'Tilapia or Cod cooked in savory tomato juice and spices.',
        null,
        null, "assets/fish.jpg"),
      new Recipe(
        'Pasta with Sausage',
        'Rigatoni or bowtie pasta with green peppers and onions',
        null,
        null, "assets/pasta.jpg"),
      new Recipe(
        'Lamb Do Piaza',
        'Australian lamb bites cooked in spicy curry sauce with garlic and onions.',
        null,
        null, null),
    ]
  };

}

