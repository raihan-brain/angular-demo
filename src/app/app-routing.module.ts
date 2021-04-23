import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginComponent } from './components/login/login.component';
import {SignInComponent} from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo : '/sign-up', pathMatch: 'full'},
  {path: 'sign-up', component: SignInComponent},
  {path: 'login', component: LoginComponent},
  {path: 'coaches', component: CoachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
