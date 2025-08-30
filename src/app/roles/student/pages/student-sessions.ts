import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-student-sessions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-sessions.html'
})
export class StudentSessionsComponent implements OnInit {
  enrollments:any[]=[]; sessions:any[]=[];
  constructor(private api: ApiService){}
  ngOnInit(){
    this.api.myEnrollments().subscribe((e:any[])=>{
      this.enrollments = e;
      // flatten sessions across enrolled courses (adjust if you have a direct endpoint)
      this.sessions = e.flatMap(x => x.course?.sessions || []);
    });
  }
}
 