import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-mentor-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mentor-courses.html'
})
export class MentorCoursesComponent implements OnInit {
  myCourses:any[]=[]; title=''; description=''; duration=''; prerequisites='';
  constructor(private api: ApiService, private router: Router){}
  ngOnInit(){ this.load(); }
  load(){ this.api.getMyCourses().subscribe(r=>this.myCourses=r); }
  create(){
    const course = { title:this.title, description:this.description, duration:this.duration, prerequisites:this.prerequisites };
    this.api.createCourse(course).subscribe(()=>{ this.title=''; this.description=''; this.duration=''; this.prerequisites=''; this.load(); });
  }
  edit(id:number){ this.router.navigate(['/mentor/courses', id]); }
  remove(id:number){ if(confirm('Delete?')) this.api.deleteCourse(id).subscribe(()=>this.load()); }
}
 