import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse, Signup, SignUpResponse } from 'src/app/models/creds';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(private signUpService: SignupService,private router: Router) { }

  ngOnInit(): void {
  }

  async submit(): Promise<void>{
    const formValue = this.form.value;
    const signUpData: Signup = {} as Signup;
    signUpData.email = formValue.email;
    signUpData.password = formValue.password;
    signUpData.returnSecureToken = true;
    const responseData: LoginResponse = await this.signUpService.doLogin(signUpData).toPromise();
    this.router.navigate(['/coaches']);

  }

  get f(){
    return this.form.controls;
  }

}
