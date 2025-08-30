import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-student-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './student-shell.html',
  styleUrls: ['../admin/shell.css']
})
export class StudentShellComponent {}
 