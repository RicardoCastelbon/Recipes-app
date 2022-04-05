import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesApiService } from '../recipes-api.service';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe;

  recipeId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesApiService: RecipesApiService
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.recipesApiService.getRecipeByIdTest(this.recipeId).subscribe((recipes) => {
      this.recipe = recipes;
    });

    // this.recipeId = this.activatedRoute.snapshot.params['id'];
  }
}
