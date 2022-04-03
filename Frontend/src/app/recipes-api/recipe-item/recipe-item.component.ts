import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  closeResult: string;

  @Input() recipe: Recipe;

  faHeart = faHeart;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
