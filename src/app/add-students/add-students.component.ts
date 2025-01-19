import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-students',
  standalone: true,
  imports: [HomeComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.css'
})
export class AddStudentsComponent {
  router = inject(Router)
  student = {
    name: '',
    age: null,
    gender: '',
    country: '',
    university: ''
  };

  constructor(private userService: UserServiceService) { }
  onSubmit() {
    console.log('Student Added:', this.student);

    this.userService.addStudent(this.student).subscribe((res: any) =>
      console.log("Student Added:", res)
    )
    alert('Student added successfully!');
    this.resetForm(); 
    this.router.navigate(['/view-students']);

  }
  resetForm() {
    this.student = {
      name: '',
      age: null,
      gender: '',
      country: '',
      university: ''
    };
  }
}
