import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-mentor-sessions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mentor-sessions.html'
})
export class MentorSessionsComponent implements OnInit {
  myCourses:any[]=[]; sessions:any[]=[]; selectedCourseId:number|undefined;
  topic=''; startTime=''; endTime='';
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.getMyCourses().subscribe(r=>this.myCourses=r); }
  loadSessions(){ if(!this.selectedCourseId) return; this.api.getSessionsByCourse(this.selectedCourseId).subscribe((r:any)=>this.sessions=r); }
  create(){
    if(!this.selectedCourseId) return;
    const data = { courseId: this.selectedCourseId, topic: this.topic, startTime: this.startTime, endTime: this.endTime };
    this.api.createSession(data).subscribe(()=>{ this.topic=''; this.startTime=''; this.endTime=''; this.loadSessions(); });
  }
  remove(id:number){ this.api.deleteSession(id).subscribe(()=> this.loadSessions()); }
}
 