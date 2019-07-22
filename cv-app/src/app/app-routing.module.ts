import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './containers/login/authentication.component';
import { AuthGuard } from './framework/auth.guard';
import { LandingComponent } from './components/landing/landing.component';
import { AccountComponent } from './containers/account/account.component';


const routes: Routes = [{ path: 'login', component: AuthenticationComponent },
{
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard],
    data: { title: 'Landing Page' }
},
{
  path: 'account/:email',
  component: AccountComponent,
  canActivate: [AuthGuard],
  data: { title: 'Account Info' }
},
{ path: '',
  redirectTo: '/login',
  pathMatch: 'full',
  data: { title: 'Sign In' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
