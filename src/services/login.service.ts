import { Injectable } from '@angular/core'
import { User } from 'src/models/user.model'
import userData from 'src/assets/users.json'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] = userData

  constructor() { }

  login (user: User) : boolean {
    return this.users.some((u: User) => u.name === user.name && u.password === user.password)
  }
}
