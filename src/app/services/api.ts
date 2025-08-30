import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'https://localhost:7132/api'; // ⚠️ match your backend port
 
  constructor(private http: HttpClient) {}
 
  // Auth (already used)
  registerUser(payload: any) { return this.http.post('`${this.base}/Auth/register`', payload); }
  // loginUser( data: any)    { return this.http.post('`${this.base}/Auth/login`', data); }
    loginUser( payload:any) { return this.http.post("https://localhost:7132/api/Auth/login", payload); }
 
  // Users (admin)
  getUsers(): Observable<any> { return this.http.get<any[]>(`${this.base}/users`); }
  deleteUser(id: number) { return this.http.delete(`${this.base}/users/${id}`); }
 
  // Courses (admin + mentor + student)
  getCourses(): Observable<any> { return this.http.get<any[]>(`${this.base}/courses`); }
  getMyCourses(): Observable<any> { return this.http.get<any[]>(`${this.base}/courses/my`); }
  createCourse(course: any) : Observable<any> { return this.http.post(`${this.base}/courses`, course); }
  updateCourse(id: number, course: any) { return this.http.put(`${this.base}/courses/${id}`, course); }
  deleteCourse(id: number) { return this.http.delete(`${this.base}/courses/${id}`); }
  getCourse(id: number) { return this.http.get(`${this.base}/courses/${id}`); }
 
  // Sessions (mentor schedule, student view)
  getSessionsByCourse(courseId: number) { return this.http.get(`${this.base}/sessions/course/${courseId}`); }
  createSession(data: any) { return this.http.post(`${this.base}/sessions`, data); }
  deleteSession(id: number) { return this.http.delete(`${this.base}/sessions/${id}`); }
 
  // Enrollments (student)
  enroll(courseId: number) { return this.http.post(`${this.base}/enrollments`, { courseId }); }
  myEnrollments(): Observable<any[]> { return this.http.get<any[]>(`${this.base}/enrollments/my`); }
 
  // Progress + Feedback
  myProgress(): Observable<any[]> { return this.http.get<any[]>(`${this.base}/progress/my`); }
  updateProgress(id: number, value: number) { return this.http.put(`${this.base}/progress/${id}`, { percent: value }); }
  submitFeedback(data: any) { return this.http.post(`${this.base}/feedback`, data); }
 
  // Admin “reports” endpoints – adjust to your backend if named differently
  adminStats() { return this.http.get(`${this.base}/reports/admin-stats`); }
  mentorStats() { return this.http.get(`${this.base}/reports/mentor-stats`); }
  studentStats() { return this.http.get(`${this.base}/reports/student-stats`); }
}
 



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private apiUrl = 'https://localhost:7132/api'; // change to your backend URL
//  constructor(private http: HttpClient) {}
 
//   registerUser(data: any): Observable<any> {
//     return this.http.post("https://localhost:7132/api/Auth/register", data);
//   }
 
//   loginUser(data: any): Observable<any> {
// return this.http.post('https://localhost:7132/api/Auth/login', data);
//   }

// //   constructor(private http: HttpClient) {}
 
// //   login( data: any): Observable<any> {
// //     return this.http.post(`${this.baseUrl}/auth/login`, {data, 
// //     headers: {'Content-Type': 'application/json'}});
// //   }
// //  register(data: any): Observable<any> {
// //   return this.http.post(`${this.baseUrl}/auth/register`, { data , 
// //     headers: {'Content-Type': 'application/json'}});
// //   }
//   // register(role: string, name: string, email: string, password: string): Observable<any> {
//   //   return this.http.post(`${this.baseUrl}/auth/register`, { role, name, email, password });
//   // }
 
// getUsers() {
//   return this.http.get<any[]>(`${this.apiUrl.replace('/auth','')}/users`);
// }
 
// deleteUser(id: number) {
//   return this.http.delete(`${this.apiUrl.replace('/auth','')}/users/${id}`);
// }
 
// getCourses() {
//   return this.http.get<any[]>(`${this.apiUrl.replace('/auth','')}/courses`);
// }
 
// deleteCourse(id: number) {
//   return this.http.delete(`${this.apiUrl.replace('/auth','')}/courses/${id}`);
// }
 
// getMyCourses() {
//   return this.http.get<any[]>(`${this.apiUrl.replace('/auth','')}/courses/my`);
// }
 
// createCourse(course: any) {
//   return this.http.post(`${this.apiUrl.replace('/auth','')}/courses`, course);
// }
 
// getMyEnrollments() {
//   return this.http.get<any[]>(`${this.apiUrl.replace('/auth','')}/enrollments/my`);
// }
 
// enrollCourse(courseId: number) {
//   return this.http.post(`${this.apiUrl.replace('/auth','')}/enrollments`, { courseId });
// }
 

// }
 