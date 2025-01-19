import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userService: UserServiceService) { }

  name = '';
  email = '';
  password = '';


  onSubmit() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.userService.registerUser(user).subscribe((res: any) => console.log(res))
    alert('User registered successfully!');
  }


}
