import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {

  constructor(
    private router: Router
    ) {}

  public OnSubmit(): void {
    this.router.navigate(['/login'])
  }

}
