import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:3000';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user, { 
      withCredentials: true 
    }).pipe(
      tap(() => this.isAuthenticatedSubject.next(true))
    );
  }

  logoutUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { 
      withCredentials: true 
    }).pipe(
      tap(() => this.isAuthenticatedSubject.next(false))
    );
  }

  addStudent(student: any) {
    return this.http.post(`${this.apiUrl}/students`, student, { 
      withCredentials: true 
    });
  }

  getStudents() {
    return this.http.get(`${this.apiUrl}/students`, { 
      withCredentials: true 
    });
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/students/${id}`, { 
      withCredentials: true 
    });
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.apiUrl}/students/${id}`, student, { 
      withCredentials: true 
    });
  }

  validateSession(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/validate-session`, { 
      withCredentials: true 
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}