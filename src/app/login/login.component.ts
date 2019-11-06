import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models/user.model'

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

  constructor() { }

  ngOnInit() {
  }

  usersLoaded (users: User[]) {
    this.users = users
  }

  logout () {
    this.resetUser()
    this.userIsLoaded = false
  }

  resetUser () {
    this.user = {}
  }

  onSubmitted () {
    this.resetUser()
    const form: any = this.userForm
    if (this.users.some(u => u.name === form.name && u.password === form.password)) {
      this.user = this.userForm
      this.userIsLoaded = true
    } else {
      this.userIsLoaded = false
    }
  }

}
