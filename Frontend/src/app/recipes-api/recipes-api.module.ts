import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesApiRoutingModule } from './recipes-api-routing.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
  
    RecipeItemComponent,
       RecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesApiRoutingModule
  ]
})
export class RecipesApiModule { }
