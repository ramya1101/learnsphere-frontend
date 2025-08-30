import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
 
  constructor(private router: Router) {}
 
  goToLogin(role: string) {
    this.router.navigate([`/login/${role}`]);
  }
 
  goToRegister(role: string) {
    this.router.navigate([`/register/${role}`]);
  }
}
 

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.html',
//   styleUrl: './home.css'
// })
// export class Home {

// }
