import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { List } from 'src/app/interface/list';
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

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserLists(id).subscribe((res: List[]) => {
      this.lists = Object.keys(res).map((k) => res[k]);
      console.log(this.lists);
    });
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('name');
    this.userEmail = localStorage.getItem('email');
    console.log(this.userEmail);
  }

  logout() {
    this.authService.doLogout();
  }
}
