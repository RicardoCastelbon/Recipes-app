import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interface/recipe';
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
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));

    /* this.recipesApiService.getRandomRecipes().subscribe((res: any) => {
      this.recipes = res.recipes.map((res: any) => res);
    }); */
  }
}
