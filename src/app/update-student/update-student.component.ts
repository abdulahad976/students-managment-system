import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Student } from '../Interface/student-interface';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {

  studentId: number | null = null;
  student: Student = { id: 0, name: '', age: '', gender: '', country: '', university: '' };
  allStudents: Student[] = [];


  userService = inject(UserServiceService);

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getStudents().subscribe((res: any) => {
      console.log(res);
      this.allStudents = res;
      this.student = this.allStudents.find(student => student.id === this.studentId) || this.student;
    });
  }

  onUpdate(): void {
    if (!this.student.name || !this.student.age || !this.student.country || !this.student.gender || !this.student.university){
      alert('Please fill all fields before updating!');
      return;
    }

    this.userService.updateStudent(this.student.id, this.student).subscribe(
      (res: any) => {
        console.log(res);
        alert(`Student ${this.student.name} updated successfully!`);
        this.router.navigate(['/view-students']);
      }
    );
  }
}
