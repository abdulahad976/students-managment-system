import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserServiceService) { }
  router = inject(Router);
  email: string = '';
  password: string = '';

  onSubmit() {
    const user = { email: this.email, password: this.password };
    
    this.userService.loginUser(user).subscribe({
      next: (res: any) => {
        if (res.user) {
          this.router.navigate(['/view-students']); 
        } else {
          alert('Login failed');
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid credentials');
      }
    });
  }
  
}
