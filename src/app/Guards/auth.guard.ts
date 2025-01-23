import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserServiceService, 
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.checkAuthentication().pipe(
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }

  private checkAuthentication(): Observable<boolean> {
    return this.userService.validateSession();
  }
}