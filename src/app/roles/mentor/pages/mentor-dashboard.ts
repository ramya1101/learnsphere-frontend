import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-mentor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentor-dashboard.html'
})
export class MentorDashboardComponent implements OnInit {
  stats:any={ courses:0, students:0, sessions:0 };
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.mentorStats().subscribe((s:any)=>this.stats=s); }
}
 