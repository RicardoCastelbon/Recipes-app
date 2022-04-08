import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/interface/recipe';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
 

  @Input() recipe: Recipe;

  

  constructor() {}

  ngOnInit(): void {}

  
}
