import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  isLoggedin!: boolean;
  url!: string;

  ngOnInit() {
    console.log(this.router);
    this.isLoggedin =
      localStorage.getItem('loggedin')?.toLowerCase() === 'true';
    console.log(typeof this.isLoggedin);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        console.log(this.url);
      } //navbar is declared outside router-oulet so this method
    });

    this.authService.logstatusChanged.subscribe(() => {
      this.isLoggedin =
        localStorage.getItem('loggedin')?.toLowerCase() === 'true';
      console.log(this.isLoggedin);

      this.url = this.router.url;
    });
  }

  onLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

  onLogout() {
    localStorage.setItem('loggedin', 'false');

    this.authService.logstatusChanged.next(null);
    this.toastr.success('Logout Successful');
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }

  onDashboard() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }
}
