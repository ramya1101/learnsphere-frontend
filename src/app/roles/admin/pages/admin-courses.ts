import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-admin-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-courses.html'
})
export class AdminCoursesComponent implements OnInit {
  courses:any[]=[];
  newCourse = {title: ''};
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.getCourses().subscribe(r=>this.courses=r); }
  remove(id:number){ if(confirm('Delete course?')) this.api.deleteCourse(id).subscribe(()=> this.ngOnInit()); }
   loadCourses() {
    this.api.getCourses().subscribe({
next: (res) => this.courses = res,
      error: (err) => console.error('Error fetching courses', err)
    });
  }
 
  createCourse() {
    this.api.createCourse(this.newCourse).subscribe({
      next: () => {
        this.newCourse.title = '';
        this.loadCourses();
      },
      error: (err) => console.error('Error creating course', err)
    });
  }
}
 