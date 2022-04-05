import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesApiService: RecipesApiService) {}

  ngOnInit(): void {
    this.recipesApiService
      .getRandomRecipes()
      .subscribe((res:any)=>{
        this.recipes = res.recipes.map((res:any)=>res);
      })
  }


  
  
}