import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Recipe } from 'src/app/interface/recipe';
import { RecipesApiService } from 'src/app/recipes-api/recipes-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  showSearch: boolean = false;
  @Input() recipes: Recipe[];

  diets:string[]=['Gluten free','Vegetarian', 'Vegan'];
  dishTypes:string[]=['Breakfast','Dessert','Main course'];



  constructor(private fb: FormBuilder, private recipesApi: RecipesApiService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      query: '',
      diet:'',
      dishType:'',
    });
  }

  searchRecipe(): void {
    const formInput = this.form.getRawValue();
    let query = formInput.query;
    let diet = formInput.diet;
    let dishTypes = formInput.dishType;
    console.log(this.form.getRawValue());
    
    this.recipesApi.searchRecipe(query,diet,dishTypes).subscribe((res: any) => {
      this.recipes = res.results;
      this.showSearch = true;
      
    });
  }
}
