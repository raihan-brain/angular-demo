import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginResponse, Signup, SignUpResponse } from '../models/creds';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  loginData: LoginResponse;

  constructor(private http: HttpClient) {}

  getServiceStatus(): string {
    return 'service working';
  }

  doSignUp(signUpData: Signup): Observable<SignUpResponse> {
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRY2X7teA9kgSC0Zk4bflPaeDOKTNz1ZU';
    return this.http.post<SignUpResponse>(url, signUpData);
  }

  doLogin(signUpData: Signup): Observable<LoginResponse> {
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRY2X7teA9kgSC0Zk4bflPaeDOKTNz1ZU';
    return this.http.post<LoginResponse>(url, signUpData);
  }

  setLoginData(data: LoginResponse): void {
    this.loginData = data;
  }

  getLoginData(): LoginResponse {
    return this.loginData;
  }

  getCoaches(): Observable<any> {
    const url =
      'https://vue-http-demo-a373b-default-rtdb.firebaseio.com/coaches.json?auth=' +
      this.loginData.idToken;
    return this.http.get<any>(url);
  }

  getTokenStatus(): boolean {
    if (this.loginData && this.loginData.idToken) {
      console.log('in signup service  true');
      return true;
    } else {
      console.log('in signup service  false');
      return false;
    }
  }
}
