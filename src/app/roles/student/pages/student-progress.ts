import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-student-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-progress.html'
})
export class StudentProgressComponent implements OnInit {
  progress:any[]=[];
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.myProgress().subscribe(r=>this.progress=r); }
}
 