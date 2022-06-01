import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesApiRoutingModule } from './recipes-api-routing.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { SearchComponent } from './recipes/search/search.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [RecipeItemComponent, RecipesComponent, RecipeViewComponent, SearchComponent,],
  imports: [
    CommonModule,
    RecipesApiRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
})
export class RecipesApiModule {}
