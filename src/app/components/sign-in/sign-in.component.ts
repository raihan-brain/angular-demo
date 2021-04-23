import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.valid);
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
