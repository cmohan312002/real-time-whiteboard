import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import Angular's common module
import { FormsModule } from '@angular/forms'; // For form handling
import { Router, RouterModule } from '@angular/router'; // If routing is needed
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Declare the imports for this component
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class  SignupComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    const signupData = { username: this.username, password: this.password };
    this.http.post('http://localhost:5000/register', signupData).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'Error during signup';
      }
    );
  }
}