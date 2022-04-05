import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData = {};

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  loginUser() {
    this.auth.login(this.loginUserData).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.info('complete'),
    });
  }
}
