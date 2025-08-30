import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-mentor-course-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mentor-course-edit.html'
})
export class MentorCourseEditComponent implements OnInit {
  id!:number; model:any={};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router){}
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getCourse(this.id).subscribe(r=>this.model=r);
  }
  save(){ this.api.updateCourse(this.id, this.model).subscribe(()=> this.router.navigate(['/mentor/courses'])); }
}
 