import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Signup, SignUpResponse } from 'src/app/models/creds';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), this.forbiddenNameValidator(/bob/i)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.oneUpperCase]),
  });

  constructor(private signUpService: SignupService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  async submit(): Promise<void>{
    const formValue = this.form.value;
    // console.log(formValue);
    // console.log(this.signUpService.getServiceStatus());
    // tslint:disable-next-line: prefer-const
    let signUpData: Signup = {} as Signup;
    signUpData.email = formValue.email;
    signUpData.password = formValue.password;
    signUpData.returnSecureToken = true;
    const responseData: SignUpResponse = await this.signUpService.doSignUp(signUpData).toPromise();
    console.log(responseData);
  }

    forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

   oneUpperCase(control: AbstractControl): { [key: string]: boolean } {
    const regex = /[A-Z]/;
    return !regex.test(control.value) ? { oneUpperCase: true } : null;
  }

}
