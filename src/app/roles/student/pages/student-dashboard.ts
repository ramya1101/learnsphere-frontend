import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.html'
})
export class StudentDashboardComponent implements OnInit {
  stats:any={ courses:0, sessions:0, progressAvg:0 };
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.studentStats().subscribe((s:any)=>this.stats=s); }
}
 