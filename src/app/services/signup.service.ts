import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Signup, SignUpResponse } from '../models/creds';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,
  ) { }

  getServiceStatus(): string {
    return 'service working';
  }

  doSignUp(signUpData: Signup): Observable<SignUpResponse> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRY2X7teA9kgSC0Zk4bflPaeDOKTNz1ZU';
    return this.http.post<SignUpResponse>(url, signUpData);
  }

}