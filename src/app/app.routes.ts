import { Route } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { WhiteboardComponent } from './components/whiteboard/whiteboard/whiteboard.component';
import { DashboardComponent } from './components/whiteboard/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'whiteboard/:id', component: WhiteboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  ];