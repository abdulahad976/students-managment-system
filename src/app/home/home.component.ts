import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewStudentsComponent } from '../view-students/view-students.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet, ViewStudentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: UserServiceService) { }
  onLogout(){
    this.service.logoutUser().subscribe();
  }
}
