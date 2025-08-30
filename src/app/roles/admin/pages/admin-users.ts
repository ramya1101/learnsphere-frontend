import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';
 
@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users.html'
})
export class AdminUsersComponent implements OnInit {
  users:any[]=[]; loading=false;
  constructor(private api: ApiService) {}
  ngOnInit(){ this.load(); }
  load(){ this.loading=true; this.api.getUsers().subscribe({next:r=>{this.users=r;this.loading=false;}, error:()=>this.loading=false}); }
  remove(id:number){ if(confirm('Delete user?')) this.api.deleteUser(id).subscribe(()=>this.load()); }
}
 