import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
    private authService: AuthService ) { }

  ngOnInit() {}

  public goBack() {
    this.location.back();
  }

  public needsLogin() {
    return !this.authService.isAuthenticated();
  }


}
