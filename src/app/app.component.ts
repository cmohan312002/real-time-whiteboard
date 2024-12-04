import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Ensure RouterModule is imported
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { WhiteboardComponent } from './components/whiteboard/whiteboard/whiteboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Import RouterModule for routing
  template: `
    <router-outlet></router-outlet>  <!-- Where routed components appear -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
