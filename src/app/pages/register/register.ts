import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';
 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  // ✅ Add these so ngModel can bind properly
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
 
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // 👇 read role from route (student, mentor, admin)
    this.role = this.route.snapshot.paramMap.get('role') || '';
  }
 
  onRegister() {
    const payload = {
name: this.name,
email: this.email,
      password: this.password,
      role: this.role
    };
 
    console.log("Register data being sent:", payload);
 
    this.api.registerUser(payload).subscribe({
      next: (res) => {
        console.log("Register success", res);
        alert("User registered successfully!");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Register failed", err);
        alert("Register failed. Check console.");
      }
    });
  }
}
 



// // import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { Router, ActivatedRoute } from '@angular/router';
// // import { ApiService } from '../../services/api';
 
// // @Component({
// //   selector: 'app-register',
// //   standalone: true,
// //   imports: [FormsModule, CommonModule],
// //   templateUrl: './register.html',
// //   styleUrls: ['./register.css']
// // })
// // export class RegisterComponent {
// //   name: string = '';
// //   email: string = '';
// //   password: string = '';
// //   role: string = '';
 
// //   constructor(
// //     private api: ApiService,
// //     private route: ActivatedRoute,
// //     private router: Router
// //   ) {}
 
// //   ngOnInit() {
// //     // 👇 read role from route (student, mentor, admin)
// //     this.role = this.route.snapshot.paramMap.get('role') || '';
// //   }
 
// //   onSubmit() {
// //     const registerData = {
// //       name: this.name,
// //       email: this.email,
// //       password: this.password,
// //       role: this.role
// //     };
 
// //     // Debugging log
// //     console.log("Register data being sent:", registerData);
 
// //     this.api.register(registerData).subscribe({
// //       next: (res: any) => {
// //         console.log('Register success', res);
// //         alert('Registered successfully, please login!');
// //         this.router.navigate([`/login/${this.role}`]);
// //       },
// //       error: (err: any) => {
// //         console.error('Register failed', err);
// //         alert('Registration failed');
// //       }
// //     });
// //   }
// // }
 




// // import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { Router, ActivatedRoute } from '@angular/router';
// // import { ApiService } from '../../services/api';   // ✅ import your service
// // import { Observable } from 'rxjs';
 
// // @Component({
// //   selector: 'app-register',
// //   standalone: true,
// //   imports: [FormsModule, CommonModule],
// //   templateUrl: './register.html',
// //   styleUrls: ['./register.css']
// // })
// // export class RegisterComponent {
// //   name: string = '';
// //   email: string = '';
// //   password: string = '';
// //   role: string = '';
 
// //   constructor(
// //     private api: ApiService,  // ✅ inject ApiService
// //     private route: ActivatedRoute,
// //     private router: Router
// //   ) {}
 
// //   ngOnInit() {
// //     this.role = this.route.snapshot.paramMap.get('role') || '';
// //   }
 
// //   onSubmit() {
// //     const registerData = {
// //       name: this.name,
// //       email: this.email,
// //       password: this.password,
// //       role: this.role
// //     };
// //     console.log("Registered data being sent:", registerData);
 
// //     this.api.register(registerData).subscribe({
// //       next: (res: any) => {   // ✅ explicitly type as any
// //         console.log('Register success', res);
// //         alert('Registered successfully, please login!');
// //         this.router.navigate([`/login/${this.role}`]);
// //       },
// //       error: (err: any) => {  // ✅ explicitly type as any
// //         console.error('Register failed', err);
// //         alert('Registration failed');
// //       }
// //     });
// //   }
// // }
 


// // // import { Component } from '@angular/core';
// // // import { FormsModule } from '@angular/forms';
// // // import { CommonModule } from '@angular/common';
// // // import { ActivatedRoute, Router } from '@angular/router';
// // // import { ApiService } from '../../services/api';
 
// // // @Component({
// // //   selector: 'app-register',
// // //   standalone: true,
// // //   imports: [CommonModule, FormsModule],
// // //   templateUrl: './register.html',
// // //   styleUrls: ['./register.css']
// // // })
// // // export class RegisterComponent {
// // //   // ✅ Add these so ngModel can bind properly
// // //   role: string = '';
// // //   name: string = '';
// // //   email: string = '';
// // //   password: string = '';
 
// // //   constructor(private router: Router,
// // //     private api: ApiService,
// // //     private route: ActivatedRoute
// // //   ) {}
// // //  onSubmit() {
// // //   const registerData = {
// // //     name: this.name,
// // //     email: this.email,
// // //     password: this.password,
// // //     role: this.role   // ✅ comes from route param
// // //   };
 
// // //   this.api.register(registerData).subscribe({
// // //     next: (res) => {
// // //       console.log('Register success', res);
// // //       alert('Registered successfully, now login!');
// // //       this.router.navigate([`/login/${this.role}`]);
// // //     },
// // //     error: (err) => {
// // //       console.error('Register failed', err);
// // //       alert('Registration failed');
// // //     }
// // //   });
// // // }
// // // }
 
// // // //   onRegister() {
// // // //     console.log('Registered:', this.name, this.email, this.password);
// // // //     // ✅ navigate after register (you can change this route later)
// // // //     this.router.navigate(['/login/student']);
// // // //   }
// // // // }
 

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
 
// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule],   // ✅ add FormsModule here too
//   templateUrl: './register.html',
//   styleUrls: ['./register.css']
// })
// export class RegisterComponent {
//   username: string = '';
//   email: string = '';
//   password: string = '';
 
//   constructor(private router: Router) {}
 
//   onRegister() {
//     console.log('Registered:', this.username, this.email, this.password);
//     this.router.navigate(['/login/student']);
//   }
// }
 

// // // // // import { Component, OnInit } from '@angular/core';
// // // // // import { ActivatedRoute, Router } from '@angular/router';
// // // // // import { ApiService } from '../../servives/api';

 
// // // // // @Component({
// // // // //   selector: 'app-register',
// // // // //   templateUrl: './register.html'
// // // // // })
// // // // // export class RegisterComponent implements OnInit {
// // // // //   role!: string;
// // // // //   name = '';
// // // // //   email = '';
// // // // //   password = '';
 
// // // // //   constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {}
 
// // // // //   ngOnInit(): void {
// // // // //     this.role = this.route.snapshot.paramMap.get('role')!;
// // // // //   }
 
// // // // //   register() {
// // // // //     this.api.register(this.role, this.name, this.email, this.password).subscribe(res => {
// // // // //       alert('Registration successful!');
// // // // //       this.router.navigate(['/login/' + this.role]);
// // // // //     });
// // // // //   }
// // // // // }
 