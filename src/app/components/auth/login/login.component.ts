import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import Angular's common module
import { FormsModule } from '@angular/forms'; // For form handling
import { Router, RouterModule } from '@angular/router'; // If routing is needed
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Declare the imports for this component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { username: this.username, password: this.password };
    this.http.post('http://localhost:5000/login', loginData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);  // Store JWT token
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = 'Invalid login credentials';
      }
    );
  }
}
