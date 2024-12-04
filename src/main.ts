import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { LoginComponent } from './app/components/auth/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { SignupComponent } from './app/components/auth/signup/signup.component';

bootstrapApplication(SignupComponent, {
  providers: [
    provideHttpClient(),  // Use this instead of HttpClientModule
    provideRouter(appRoutes),  // Assuming routes are defined in app.routes.ts
  ]
});