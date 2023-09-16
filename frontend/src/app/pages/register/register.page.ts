import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });

  }

  public OnSubmit(): void {

      this.authSvc.register(this.registerForm.value).subscribe(((value) => {
        console.log(value);
      }))

      this.router.navigate(['/login']);
  }

}
