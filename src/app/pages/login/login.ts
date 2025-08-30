import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // Name:string='';
  Email: string = '';
  Password: string = '';
  // Role: string = '';

  constructor(private api: ApiService, private router: Router) {}
 
  onLogin() {
  const loginData = {Email: this.Email, Password: this.Password };

  this.api.loginUser(loginData).subscribe({
    next: (res: any) => {
      if (!res || !res.token) {
        alert('No token received');
        return;
      }

      const token = res.token;
      localStorage.setItem('token', token);

      const payload = JSON.parse(atob(res.token.split('.')[1]));
      console.log("Decoded token payload:", payload);

      const role =
        payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
        payload.role ||
        payload.Role;

      console.log("Extracted role:", role);

      if (role === 'Admin') {
        this.router.navigate(['/pages/admin-dashboard']);
      } else if (role === 'Mentor') {
        this.router.navigate(['/pages/mentor-dashboard']);
      } else if (role === 'Student') {
        this.router.navigate(['/pages/student-dashboard']);
      } else {
        alert("Unknown role: " + role);
      }
    },
    error: (err) => {
      console.error('Login failed', err);
      alert('Invalid credentials');
    }
  });
}
} 
 
  





// import { Component } from '@angular/core';
// import { ApiService } from '../../services/api';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
 
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule, RouterModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })

// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   role:string='';
 
//   constructor(private apiService: ApiService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}
 
//   onLogin() {
//     const payload = {
//       email: this.email,
//       password: this.password,
//       role:this.role
//     };
 
//     console.log("Login data being sent:", payload);
 
//     // this.apiService.loginUser(payload).subscribe({
//     //   next: (res) => {
//     //     console.log("Login success", res);
//     //     alert("Login successful!");

//         //  this.router.navigate([`/login/${this.role}`]);
//         // TODO: Navigate to dashboard if needed
//         this.apiService.loginUser(payload).subscribe({
//   next: (res: any) => {
//     console.log('Login success', res);
 
//     // Save JWT token in localStorage
//     localStorage.setItem('token', res.token);
 
//     // Decode token → get role
//     const payload = JSON.parse(atob(res.token.split('.')[1]));
//     const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
 
//     // Redirect based on role
//     if (role === 'admin') {
//       this.router.navigate(['/admin-dashboard']);
//     } else if (role === 'mentor') {
//       this.router.navigate(['/mentor-dashboard']);
//     } else if (role === 'student') {
//       this.router.navigate(['/student-dashboard']);
//     } else {
//       alert('Unknown role');
//     }
//   },
//   error: (err) => {
//     console.error('Login failed', err);
//     alert('Invalid credentials');
//   }
// });
// }
// }

// //       },
// //       error: (err) => {
// //         console.error("Login failed", err);
// //         alert("Invalid credentials");
// //       }
// //     });
// //   }
// // }
 



// // import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { Router, ActivatedRoute } from '@angular/router';
// // import { ApiService } from '../../services/api';   // ✅ use your existing api.service
 
// // @Component({
// //   selector: 'app-login',
// //   standalone: true,
// //   imports: [FormsModule, CommonModule],
// //   templateUrl: './login.html',
// //   styleUrls: ['./login.css']
// // })
// // export class LoginComponent {
// //   username: string= '';
// //   email: string = '';
// //   password: string = '';
// //   role: string = '';
 
// //   constructor(
// //     private api: ApiService,
// //     private route: ActivatedRoute,
// //     private router: Router
// //   ) {}
 
// //   ngOnInit() {
// //     this.role = this.route.snapshot.paramMap.get('role') || '';
// //   }
 
// //   // ✅ This is where you put your loginData + subscribe code

// //    onLogin() {
// //     if (this.username && this.password) {
// //       this.router.navigate(['/student-dashboard']);
      
// //     }
// //    }
// //    onSubmit() {
// //   const loginData = { email: this.email, password: this.password };
 
// //   this.api.login(loginData).subscribe({
// //     next: (res: any) => {   // ✅ typed
// //       console.log('Login success', res);
// //       localStorage.setItem('token', res.token);
 
// //       if (this.role === 'admin') {
// //         this.router.navigate(['/admin-dashboard']);
// //       } else if (this.role === 'mentor') {
// //         this.router.navigate(['/mentor-dashboard']);
// //       } else {
// //         this.router.navigate(['/student-dashboard']);
// //       }
// //     },
// //     error: (err: any) => {  // ✅ typed
// //       console.error('Login failed', err);
// //       alert('Invalid credentials');
// //     }
// //   });
// // }
// // }



// // // onSubmit() {
// // //   const loginData = {
// // //     email: this.email,
// // //     password: this.password
// // //   };
 
// // //   this.api.login(loginData).subscribe({
// // //     next: (res) => {
// // //       console.log('Login success', res);
 
// // //       // store JWT token in localStorage for later API calls
// // //       localStorage.setItem('token', res.token);
 
// // //       // navigate to dashboards
// // //       if (this.role === 'admin') {
// // //         this.router.navigate(['/admin-dashboard']);
// // //       } else if (this.role === 'mentor') {
// // //         this.router.navigate(['/mentor-dashboard']);
// // //       } else {
// // //         this.router.navigate(['/student-dashboard']);
// // //       }
// // //     },
// // //     error: (err) => {
// // //       console.error('Login failed', err);
// // //       alert('Invalid credentials');
// // //     }
// // //   });
// // // }
// // // }

// // //   onSubmit() {
// // //     const loginData = { email: this.email, password: this.password };
 
// // //     this.api.login(this.role, loginData).subscribe({
// // //       next: (res) => {
// // //         console.log('Login success', res);
 
// // //         // Navigate based on role
// // //         this.router.navigate([`/${this.role}-dashboard`]);
// // //       },
// // //       error: (err) => {
// // //         console.error('Login failed', err);
// // //         alert('Invalid credentials');
// // //       }
// // //     });
// // //   }
// // // }
 


// // // import { Component } from '@angular/core';
// // // import { FormsModule } from '@angular/forms';
// // // import { CommonModule } from '@angular/common';
// // // import { ActivatedRoute, Router } from '@angular/router';
// // // import { ApiService } from '../../services/api';
 
// // // @Component({
// // //   selector: 'app-login',
// // //   standalone: true,
// // //   imports: [CommonModule, FormsModule],   // ✅ important
// // //   templateUrl: './login.html',
// // //   styleUrls: ['./login.css']
// // // })
// // // export class LoginComponent {
// // //   username: string = '';
// // //   password: string = '';
// // //   email: string = '';
// // //   role: string = '';
 
// // // constructor(
// // //   private api: ApiService,
// // //   private route: ActivatedRoute,
// // //   private router: Router
// // // ) {}
 
// // //   onLogin() {
// // //     if (this.username && this.password) {
// // //       this.router.navigate(['/student-dashboard']);
// // //     }
// // //   }

// // // onSubmit() {
// // //   const loginData = { email: this.email, password: this.password };
 
// // //   this.api.login(this.role, loginData).subscribe({
// // //     next: (res) => {
// // //       console.log('Login Success:', res);
// // //       this.router.navigate([`/${this.role}-dashboard`]);
// // //     },
// // //     error: (err) => {
// // //       console.error('Login Failed', err);
// // //       alert('Login failed. Please try again.');
// // //     }
// // //   });
// // // }
// // // }
 

// // // //   constructor(private router: Router) {}
 
// // // //   onLogin() {
// // // //     if (this.username && this.password) {
// // // //       this.router.navigate(['/student-dashboard']);
// // // //     }
// // // //   }
// // // // }
 



// // // // import { Component } from '@angular/core';
// // // // import { Router } from '@angular/router';
 
// // // // @Component({
// // // //   selector: 'app-login',
// // // //   standalone: true,
// // // //   templateUrl: './login.html',
// // // //   styleUrls: ['./login.css']
// // // // })
// // // // export class LoginComponent {
// // // //   username: string = '';
// // // //   password: string = '';
 
// // // //   constructor(private router: Router) {}
 
// // // //   onLogin() {
// // // //     if (this.username && this.password) {
// // // //       // For now, just navigate
// // // //       this.router.navigate(['/student-dashboard']);
// // // //     }
// // // //   }
// // // // }
 

// // // // import { Component, OnInit } from '@angular/core';
// // // // import { ActivatedRoute, Router } from '@angular/router';
// // // // import { ApiService } from '../../servives/api';

 
// // // // @Component({
// // // //   selector: 'app-login',
// // // //   templateUrl: './login.html'
// // // // })
// // // // export class LoginComponent implements OnInit {
// // // //   role!: string;
// // // //   username = '';
// // // //   password = '';
 
// // // //   constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {}
 
// // // //   ngOnInit(): void {
// // // //     this.role = this.route.snapshot.paramMap.get('role')!;
// // // //   }
 
// // // //   login() {
// // // //     this.api.login(this.role, this.username, this.password).subscribe(res => {
// // // //       if (this.role === 'admin') this.router.navigate(['/admin-dashboard']);
// // // //       else if (this.role === 'mentor') this.router.navigate(['/mentor-dashboard']);
// // // //       else this.router.navigate(['/student-dashboard']);
// // // //     });
// // // //   }
// // // }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ApiService } from '..service/api';

 
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';
 
//   constructor(private api: ApiService, private router: Router) {}
 
//   login() {
//     const loginData = {
// email: this.email,
//       password: this.password
//     };
 
//     this.api.loginUser(loginData).subscribe(
//       (res: any) => {
//         console.log("Login Response:", res);
 
//         const token = res.token;
//         localStorage.setItem('token', token);
 
//         // Decode JWT
//         const payload = JSON.parse(atob(token.split('.')[1]));
 
//         // Extract role (backend sends it in claimTypes)
//         const role =
// payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
//           payload.role ||
//           payload.Role;
 
//         console.log("Extracted Role:", role);
 
//         // Navigate based on role
//         if (role === 'Admin') {
//           this.router.navigate(['/admin-dashboard']);
//         } else if (role === 'Mentor') {
//           this.router.navigate(['/mentor-dashboard']);
//         } else if (role === 'Student') {
//           this.router.navigate(['/student-dashboard']);
//         } else {
//           alert("Unknown role: " + role);
//         }
//       },
//       (err) => {
//         console.error("Login failed:", err);
//         alert("Invalid login credentials");
//       }
//     );
//   }
// }
