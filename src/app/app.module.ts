import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { UserComponent } from './user/user.component'
import { TaskComponent } from './task/task.component'
import { ProjectComponent } from './project/project.component'
import { LoginComponent } from './login/login.component'
import { TableFilterPipe } from '../pipes/table-filter.pipe'
import { UsersService } from '../services/users.service'
import { ProjectsService } from '../services/projects.service'
import { LoginService } from '../services/login.service'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    ProjectComponent,
    LoginComponent,
    TableFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [UsersService, ProjectsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
