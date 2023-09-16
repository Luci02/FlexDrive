import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });

  }

  public OnSubmit() {
    this.authSvc.login(this.loginForm.value).subscribe( ((value: any) => {
      console.log(value);
      localStorage.setItem('token', value.accessToken);
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('username', value.username);
      localStorage.setItem('isAdmin', value.admin);
      this.router.navigate(['/home']);
    }))
  }

}
