import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    //this will make new recipes based on the recipe class that we created in the recipes.model
    new Recipe('test cookie', 'yummy cookies','https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
