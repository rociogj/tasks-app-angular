import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models/user.model'
import { LoginService } from 'src/services/login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: Object = {name: '', password: ''}
  user: Object = {}
  userIsLoaded: boolean = false
  users: User[]
  showMessage: boolean = false
  errorMessage: String = 'Invalid user/password'
  successMessage: String = 'Login succeded!'

  constructor(public LoginService: LoginService) { }

  ngOnInit() {
  }

  usersLoaded (users: User[]) {
    this.users = users
  }

  logout () {
    this.resetUser()
    this.userIsLoaded = false
    this.showMessage = false
  }

  resetUser () {
    this.user = {}
  }

  onSubmitted () {
    this.resetUser()
    const form: any = this.userForm
    this.showMessage = true
    this.userIsLoaded = this.LoginService.login(form)
    this.user = form
  }

}
