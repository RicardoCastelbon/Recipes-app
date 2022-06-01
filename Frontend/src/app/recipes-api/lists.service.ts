import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../auth/user';
import { List } from '../interface/list';
import { Recipe } from '../interface/recipe';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  endPoint: string = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, public router: Router) {}

  getRecipesFromList(listId: number): Observable<Recipe[]> {
    let api = `${this.endPoint}/recipelist/${listId}`;
    return this.http.get<Recipe[]>(api);
  }

  addRecipeToList(listId: number, recipeInfo: object) {
    console.log(listId);
    console.log(recipeInfo);
    let api = `${this.endPoint}/recipelist-add/${listId}`;
    return this.http
      .post(api, JSON.stringify(recipeInfo), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteRecipeFromList(id: number) {
    let api = `${this.endPoint}/recipelist-delete/${id}`;
    return this.http.post(api, null);
  }

  createList(title: object): Observable<List> {
    let api = `${this.endPoint}/list-create/${localStorage.getItem('id')}`;
    console.log(title);
    return this.http.post<List>(api, JSON.stringify(title), this.httpOptions);
    /* .pipe(catchError(this.handleError)); */
  }
  deleteList(listId: number) {
    let api = `${this.endPoint}/list-delete/${listId}`;
    return this.http.delete(api);
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
