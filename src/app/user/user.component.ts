import { Component, OnInit } from '@angular/core'
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

  constructor () {
    console.log('this.newUser', this.newUser)
  }

  ngOnInit () {
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
