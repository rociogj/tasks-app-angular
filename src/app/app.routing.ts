import  { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { TaskComponent } from './task/task.component'
import { ProjectComponent } from './project/project.component'

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'tasks', component: TaskComponent},
  {path: 'projects', component: ProjectComponent, children: [
    {path: ':id', component: LoginComponent}
  ]},
  {path: 'login', component: LoginComponent}
]

export const Routing = RouterModule.forRoot(routes)