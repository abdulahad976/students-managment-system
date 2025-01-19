import { Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: HomeComponent,
        canActivate : [AuthGuard],
        children: [
            {
                path: "view-students",
                component: ViewStudentsComponent
            },
            {
                path: 'add-students',
                component: AddStudentsComponent
            },
            {
                path: 'update-students/:id', 
                component: UpdateStudentComponent
        
            }
        ]
    },{
        path: '**',
        redirectTo: ''
    }
];
