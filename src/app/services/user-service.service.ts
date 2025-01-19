import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/students';
  private registerUrl = 'http://localhost:3000/register';
  private loginUrl = 'http://localhost:3000/login';


  registerUser(user: any) {
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post(this.loginUrl, user);
  }

  addStudent(student: any){
    return this.http.post(this.apiUrl, student);
  }

  getStudents() {
    return this.http.get(this.apiUrl);
  }


  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }

  refreshData() {
    return this.http.get(this.apiUrl);
  }
}
