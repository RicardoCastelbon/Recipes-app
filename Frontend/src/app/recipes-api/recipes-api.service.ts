import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  apiUrl = 'http://localhost:5000/recipes';
  apiSpoon = 'https://api.spoonacular.com/recipes';
  apiKey = 'ba983773378c45db91c031c80df4c244';
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }
  getRandomRecipes(): Observable<object> {
    return this.http.get(
      `${this.apiSpoon}/random?apiKey=${this.apiKey}&number=2`
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
}
