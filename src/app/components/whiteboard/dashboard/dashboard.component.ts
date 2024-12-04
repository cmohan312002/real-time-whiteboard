import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  files: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const userId = 'user-id-from-token'; // Get from JWT token or localStorage
    
    // Get files for the user
    this.http.get(`http://localhost:5000/get-files/${userId}`).subscribe((response: any) => {
      this.files = response.files;
    });
  }

  openWhiteboard(fileId: string) {
    this.router.navigate(['/whiteboard', fileId]);
  }
}