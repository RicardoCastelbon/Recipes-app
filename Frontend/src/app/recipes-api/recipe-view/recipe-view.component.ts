import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesApiService } from '../recipes-api.service';
import { Recipe } from 'src/app/interface/recipe';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ListsService } from '../lists.service';
import { List } from 'src/app/interface/list';
import { AuthService } from 'src/app/auth/auth.service';
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
  lists: List[] = [];

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private recipesApiService: RecipesApiService,
    private listsService: ListsService
  ) {
    let id = localStorage.getItem('id');
    this.authService.getUserLists(id).subscribe((res: List[]) => {
      this.lists = Object.keys(res).map((k) => res[k]);
      console.log(this.lists);
    });
  }

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.recipeId = this.activatedRoute.snapshot.params['id']; This works also
    this.recipesApiService.getRecipeById(this.recipeId).subscribe((recipes) => {
      this.recipe = recipes;
    });
  }

  addRecipe(
    listId: number,
    recipeId: number,
    recipeTitle: string,
    recipeImage: string
  ) {
    const recipeInfo = {
      recipeName: recipeTitle,
      recipeId: recipeId,
      image: recipeImage,
    };

    this.listsService
      .addRecipeToList(listId, recipeInfo)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
