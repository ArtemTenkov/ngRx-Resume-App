import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './containers/login/authentication.component';
import { AuthGuard } from './framework/auth.guard';
import { LandingComponent } from './components/landing/landing.component';
import { AccountComponent } from './containers/account/account.component';
import { MessagesComponent } from './containers/messages/messages.component';


const routes: Routes = [{ path: 'login', component: AuthenticationComponent,
data: { title: 'Sign In' } },
{
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard],
    data: { title: 'Landing Page' }
},
{
  path: 'messages',
  component: MessagesComponent,
  canActivate: [AuthGuard],
  data: { title: 'Inbox' }
},
{
  path: 'messages/:email',
  component: MessagesComponent,
  canActivate: [AuthGuard],
  data: { title: 'Inbox' }
},
{
  path: 'account/:email',
  component: AccountComponent,
  canActivate: [AuthGuard],
  data: { title: 'Account Info' }
},
{ path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
