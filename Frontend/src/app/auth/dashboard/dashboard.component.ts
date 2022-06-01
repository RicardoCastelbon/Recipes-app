import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { List } from 'src/app/interface/list';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ListsService } from 'src/app/recipes-api/lists.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentUser: any = {};

  lists: List[] = [];

  userName!: string;
  userEmail!: string;

  form!: FormGroup;

  listClicked: boolean = false;

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private listsService: ListsService
  ) {
    let id = localStorage.getItem('id');
    this.authService.getUserLists(id).subscribe((res: List[]) => {
      this.lists = Object.keys(res).map((k) => res[k]);
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
    });

    this.userName = localStorage.getItem('name');
    this.userEmail = localStorage.getItem('email');
    console.log(this.userEmail);
  }

  createList(): void {
    const title = this.form.getRawValue();
    //let listName = formInput.query;
    //console.log(formInput);
    this.listsService.createList(title).subscribe((res: any) => {
      console.log(res);
    });
  }

  deleteList(listId: number) {
    console.log(listId);
    this.listsService.deleteList(listId).subscribe((res: any) => {});
  }

  logout() {
    this.authService.doLogout();
  }

  onListClicked() {
    this.listClicked = !this.listClicked;
  }
}
