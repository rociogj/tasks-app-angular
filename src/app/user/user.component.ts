import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core'
import { User } from 'src/models/user.model'
import userData from 'src/assets/users.json'
import { UsersService } from 'src/services/users.service'

interface newUser {
  name: String
  email: String
}

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: User[]
  tableIsVisible: boolean = true
  searchValue: string
  newUser: Object = {name: '', email: ''}
  
  @Input() user: Object
  @Input() userIsLoaded: boolean
  @Output() onLoadUsers: EventEmitter<User[]> = new EventEmitter<User[]>()
  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>()

  constructor (public UsersService: UsersService) {
  }

  ngOnInit () {
    this.users = this.UsersService.getUsers()
  }

  ngOnChanges () {
    this.onLoadUsers.emit(this.users)
  }

  logout () {
    this.onLogout.emit()
  }

  toggleTable () {
    this.tableIsVisible = !this.tableIsVisible
  }

  removeItem (user: any) {
    const userIndex = this.users.indexOf(user)
    this.users.splice(userIndex, 1)
  }

  addItem (user: any) {
    const newUser = {...user, id: userData.length + 1, password: ''}
    this.users.push(newUser)
  }
}
