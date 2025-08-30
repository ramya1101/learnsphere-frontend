import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html'
})
export class AdminDashboardComponent implements OnInit {
  stats: any = { users: 0, courses: 0, enrollments: 0 };
 
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.adminStats().subscribe({
      next: (s:any) => this.stats = s,
      error: () => {}
    });
  }
}
 