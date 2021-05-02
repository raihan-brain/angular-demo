import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachAComponent } from './components/coaches/coach-a/coach-a.component';
import { CoachBComponent } from './components/coaches/coach-b/coach-b.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignInComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'coaches',
    component: CoachesComponent,
    children: [
      { path: 'coachA/:id', component: CoachAComponent },
      { path: 'coachB/:id', component: CoachBComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
