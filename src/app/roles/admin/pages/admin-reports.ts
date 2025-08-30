import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-reports.html'
})
export class AdminReportsComponent implements OnInit {
  report:any;
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.adminStats().subscribe(r=>this.report=r); }
}
 