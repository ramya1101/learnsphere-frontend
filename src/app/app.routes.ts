import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
 
// Shells
import { AdminShellComponent } from './roles/admin/admin-shell';
import { MentorShellComponent } from './roles/mentor/mentor-shell';
import { StudentShellComponent } from './roles/student/student-shell';
 
// Admin pages
import { AdminDashboardComponent } from './roles/admin/pages/admin-dashboard';
import { AdminUsersComponent } from './roles/admin/pages/admin-users';
import { AdminCoursesComponent } from './roles/admin/pages/admin-courses';
import { AdminReportsComponent } from './roles/admin/pages/admin-reports';
 
// Mentor pages
import { MentorDashboardComponent } from './roles/mentor/pages/mentor-dashboard';
import { MentorCoursesComponent } from './roles/mentor/pages/mentor-courses';
import { MentorCourseEditComponent } from './roles/mentor/pages/mentor-course-edit';
import { MentorSessionsComponent } from './roles/mentor/pages/mentor-sessions';
import { MentorReportsComponent } from './roles/mentor/pages/mentor-reports';
 
// Student pages
import { StudentDashboardComponent } from './roles/student/pages/student-dashboard';
import { StudentBrowseComponent } from './roles/student/pages/student-browse';
import { StudentMyCoursesComponent } from './roles/student/pages/student-my-courses';
import { StudentProgressComponent } from './roles/student/pages/student-progress';
import { StudentSessionsComponent } from './roles/student/pages/student-sessions';
 
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login/:role', component: LoginComponent },
  { path: 'register/:role', component: RegisterComponent },
 
  // ADMIN
  {
    path: 'admin',
    component: AdminShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'courses', component: AdminCoursesComponent },
      { path: 'reports', component: AdminReportsComponent }
    ]
  },
 
  // MENTOR
  {
    path: 'mentor',
    component: MentorShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: MentorDashboardComponent },
      { path: 'courses', component: MentorCoursesComponent },
      { path: 'courses/:id', component: MentorCourseEditComponent },
      { path: 'sessions', component: MentorSessionsComponent },
      { path: 'reports', component: MentorReportsComponent }
    ]
  },
 
  // STUDENT
  {
    path: 'student',
    component: StudentShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'browse', component: StudentBrowseComponent },
      { path: 'my-courses', component: StudentMyCoursesComponent },
      { path: 'progress', component: StudentProgressComponent },
      { path: 'sessions', component: StudentSessionsComponent }
    ]
  },
];
 


// // app.routes.ts
// import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
// import { LoginComponent } from './pages/login/login';
// import { RegisterComponent } from './pages/register/register';
// import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard';
// import { MentorDashboardComponent } from './pages/mentor-dashboard/mentor-dashboard';
// import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard';
 
// export const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'login/:role', component: LoginComponent },
//   { path: 'register/:role', component: RegisterComponent },
//   { path: 'admin-dashboard', component: AdminDashboardComponent },
//   { path: 'mentor-dashboard', component: MentorDashboardComponent },
//   { path: 'student-dashboard', component: StudentDashboardComponent },
// ];
 


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { Home } from './pages/home/home';
// import { LoginComponent } from './pages/login/login';
// import { Routes } from '@angular/router';
// import { RegisterComponent } from './pages/register/register';
// // import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard';
// // import { MentorDashboardComponent } from './pages/mentor-dashboard/mentor-dashboard';
// // import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard';
 
// const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'login/:role', component: LoginComponent },
//   { path: 'register/:role', component: RegisterComponent },
// //   { path: 'admin-dashboard', component: AdminDashboardComponent },
// //   { path: 'mentor-dashboard', component: MentorDashboardComponent },
// //   { path: 'student-dashboard', component: StudentDashboardComponent },
// ];
 
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
 