import { Injectable } from '@angular/core';
import { LISTRECIPES } from '../recipes/recipes-list/recipes-list.example';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor(private readonly http: HttpClient) { }

  getRecipes(){
    return LISTRECIPES;
  }
}
