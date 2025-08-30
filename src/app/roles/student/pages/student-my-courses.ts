import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-student-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-my-courses.html'
})
export class StudentMyCoursesComponent implements OnInit {
  enrollments:any[]=[];
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.myEnrollments().subscribe(r=>this.enrollments=r); }
}
 