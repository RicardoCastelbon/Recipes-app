import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesApiRoutingModule } from './recipes-api-routing.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';

@NgModule({
  declarations: [RecipeItemComponent, RecipesComponent, RecipeViewComponent, ],
  imports: [CommonModule, RecipesApiRoutingModule, FontAwesomeModule],
})
export class RecipesApiModule {}
