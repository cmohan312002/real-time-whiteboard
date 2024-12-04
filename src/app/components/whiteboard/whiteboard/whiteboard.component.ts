import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-whiteboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss'],
})
export class WhiteboardComponent {
  socket: any;
  whiteboardData: any = [];
  userId: string = '';
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.socket = io.io('http://localhost:5000');
  }

  ngOnInit() {
    // Get the user ID from local storage or route
    this.userId = 'user-id-from-token'; // Use decoded JWT token for user ID
    
    // Retrieve whiteboard data from the server (if any)
    this.http.get(`http://localhost:5000/get-whiteboard/${this.userId}`).subscribe((response: any) => {
      this.whiteboardData = response.data;
    });
  }

  saveWhiteboardData() {
    const token = localStorage.getItem('token');
    const data = this.whiteboardData;

    this.http.post('http://localhost:5000/save-whiteboard', { token, data }).subscribe((response) => {
      console.log('Whiteboard data saved');
    });
  }

  drawOnWhiteboard(data: any) {
    this.socket.emit('draw', data);
  }

  listenForDrawings() {
    this.socket.on('draw', (data: any) => {
      this.whiteboardData.push(data); // Draw received data on the whiteboard
    });
  }
}