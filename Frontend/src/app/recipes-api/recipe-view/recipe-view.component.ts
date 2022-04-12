import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesApiService } from '../recipes-api.service';
import { Recipe } from 'src/app/interface/recipe';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ListsService } from '../lists.service';
@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
  faClock = faClock;
  faPlate = faPlateWheat;
  faUtensils = faUtensils;

  recipe: Recipe;
  recipeId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesApiService: RecipesApiService,
    private listsService: ListsService
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.recipeId = this.activatedRoute.snapshot.params['id']; This works also
    this.recipesApiService
      .getRecipeById(this.recipeId)
      .subscribe((recipes) => {
        this.recipe = recipes;
      });
  }

  addRecipe(){
    
  }

}
