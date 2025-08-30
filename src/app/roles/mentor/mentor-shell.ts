import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-mentor-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './mentor-shell.html',
  styleUrls: ['../admin/shell.css']
})
export class MentorShellComponent {}
 