import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedin: boolean = false;

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.commonService.loginStatusChanged.subscribe(() => {
      this.isLoggedin = localStorage?.getItem('isLoggedin') === 'true';
      console.log(this.isLoggedin);
    });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedin', 'false');
    this.commonService.loginStatusChanged.next(null);
    // this.isLoggedin = Boolean(localStorage?.getItem('isLoggedin'));
    this.router.navigate(['/login']);
  }
}
