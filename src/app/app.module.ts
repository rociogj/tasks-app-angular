import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import  { Routing } from './app.routing'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { UserComponent } from './user/user.component'
import { TaskComponent } from './task/task.component'
import { ProjectComponent } from './project/project.component'
import { LoginComponent } from './login/login.component'
import { TableFilterPipe } from '../pipes/table-filter.pipe'
import { UsersService } from '../services/users.service'
import { ProjectsService } from '../services/projects.service'
import { LoginService } from '../services/login.service'
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    ProjectComponent,
    LoginComponent,
    TableFilterPipe,
    HeaderNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [UsersService, ProjectsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
