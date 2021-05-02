import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../services/signup.service';

@Injectable({
  providedIn: 'root',
})
export class CoachGuard implements CanActivate {
  constructor(private signUPService: SignupService, private router: Router) {}

  canActivate(): boolean {
    console.log('================= working on CoachGuard', this.signUPService.getTokenStatus());
    if (this.signUPService.getTokenStatus()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
