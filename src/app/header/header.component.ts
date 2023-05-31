import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedin!: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedin = this.authService.getIsLoggedin();
  }

  onLogin() {
    this.authService.login('admin', 'password');
    this.isLoggedin = this.authService.getIsLoggedin();
  }
  onLogout() {
    this.authService.logout();
  }
}
