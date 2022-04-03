import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesApiRoutingModule } from './recipes-api-routing.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RecipeItemComponent, RecipesComponent, RecipeModalComponent],
  imports: [CommonModule, RecipesApiRoutingModule, FontAwesomeModule],
})
export class RecipesApiModule {}
