import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: String | null = '';

  constructor() {
    this.isLoggedIn = localStorage.getItem('isLogged') == 'true' ? true : false || false;
    this.username = localStorage.getItem('username') || null;
    this.isAdmin = localStorage.getItem('isAdmin') == 'true' ? true : false;
  }

  toggleNavbar = true;

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogged');
    localStorage.removeItem('username');
    window.location.reload();
  }

}
