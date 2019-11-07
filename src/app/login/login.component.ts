import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
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
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
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
    this.userForm.reset()
  }

  onSubmitted () {
    console.log('this.userForm', this.userForm)
    this.showMessage = true
    if (!this.userForm.valid) return
    const form: User = this.userForm.value
    this.userIsLoaded = this.LoginService.login(form)
    this.user = form
    this.resetUser()
  }

}
