import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Student } from '../Interface/student-interface';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.css'
})
export class ViewStudentsComponent {
  students: Student[] = [];

  constructor(private userService: UserServiceService) { }
  ngOnInit(): void {
    this.userService.getStudents().subscribe((res: any) => {
      console.log(res);
      this.students = res;
    });
  }

  onDelete(studentId: number): void{
    const confirms = confirm("Are you sure you want to delete this student?");
    if(!confirms){
      return;
    }
    this.userService.deleteStudent(studentId).subscribe(
      response => {
        console.log(response);
        this.students = this.students.filter(student => student.id !== studentId);
      }
  )}
}
