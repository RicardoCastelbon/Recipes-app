import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../interface/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  apiUrl = 'http://localhost:5000/recipes';
  apiSpoon = 'https://api.spoonacular.com/recipes';
  apiKey="201ac3cb45144b69abb02e0a5790892e";
  //apiKey = 'ba983773378c45db91c031c80df4c244';
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }
  getRandomRecipes(): Observable<object> {
    return this.http.get(
      `${this.apiSpoon}/random?apiKey=${this.apiKey}&number=6`
    );
  }
  getRecipeById(recipeId): Observable<Recipe> {
    return this.http.get<Recipe>(
      `${this.apiSpoon}/${recipeId}/information?apiKey=${this.apiKey}`
    );
  }
  getRecipeByIdTest(recipeId): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${recipeId}`);
  }

  searchRecipe(query: any, diet: any, dishType: any): Observable<object> {
    return this.http.get(
      `${this.apiSpoon}/complexSearch?apiKey=${this.apiKey}&query=${query}&diet=${diet}&type=${dishType}`
    );
  }
}
