import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { User } from 'src/models/user.model'
import { LoginService } from 'src/services/login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup
  user: Object = {}
  userIsLoaded: boolean = false
  users: User[]
  showMessage: boolean = false
  errorMessage: String = 'Invalid user/password'
  successMessage: String = 'Login succeded!'

  constructor(public LoginService: LoginService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl()
    })
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
    const form: User = this.userForm.value
    console.log('form', form)
    this.showMessage = true
    this.userIsLoaded = this.LoginService.login(form)
    this.user = form
  }

}
