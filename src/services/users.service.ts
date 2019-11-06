import { Injectable } from '@angular/core'
import { User } from 'src/models/user.model'
import userData from 'src/assets/users.json'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]

  constructor() { }

  getUsers (): User[] {
    this.users = userData
    return this.users
  }
}
