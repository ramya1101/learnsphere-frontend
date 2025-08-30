
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//this is app.ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learnsphere-frontend');
}
