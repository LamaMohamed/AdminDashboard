import { Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/_services/autentication.service';
import { Admin} from './auth/_model/admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='admin-dashboard';
  opened = true;
  currentUser?: Admin;
  loading = false;
    users: Admin[];

    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser?.subscribe(x => this.currentUser = x);
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
 
  ngOnInit() {
  }
}
