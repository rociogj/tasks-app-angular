import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { User } from 'src/models/user.model'
import userData from 'src/assets/users.json'

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
  users: User[] = userData
  tableIsVisible: boolean = true
  searchValue: string
  newUser: Object = {name: '', email: ''}
  
  @Input() user: Object
  @Input() userIsLoaded: boolean
  @Output() onLoadUsers: EventEmitter<User[]> = new EventEmitter<User[]>()
  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>()

  constructor () {
  }

  ngOnInit () {
    this.loadUsers()
  }

  loadUsers () {
    this.onLoadUsers.emit(this.users)
  }

  logout () {
    this.onLogout.emit()
  }

  toggleTable () {
    this.tableIsVisible = !this.tableIsVisible
  }

  filterTable () {
    this.users = this.searchValue ? userData.filter(user => user.name.toLowerCase().includes(this.searchValue)) : userData
  }

  removeItem (user: any) {
    const userIndex = this.users.indexOf(user)
    this.users.splice(userIndex, 1)
  }

  addItem (user: any) {
    const newUser = {...user, id: this.users.length + 1, password: ''}
    this.users.push(newUser)
  }
}
