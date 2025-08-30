import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-mentor-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentor-report.html'
})
export class MentorReportsComponent implements OnInit {
  report:any;
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.mentorStats().subscribe(r=>this.report=r); }
}
 