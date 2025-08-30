import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-student-browse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-browse.html'
})
export class StudentBrowseComponent implements OnInit {
  courses:any[]=[];
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.getCourses().subscribe(r=>this.courses=r); }
  enroll(id:number){ this.api.enroll(id).subscribe(()=> alert('Enrolled!')); }
}
 