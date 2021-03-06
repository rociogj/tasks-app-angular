import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { User } from 'src/models/user.model'
import userData from 'src/assets/users.json'
import { UsersService } from 'src/services/users.service'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: User[]
  tableIsVisible: boolean = true
  searchForm: FormControl
  newUser = new User('', '')
  
  @Input() user: User
  @Input() userIsLoaded: boolean
  @Output() onLoadUsers: EventEmitter<User[]> = new EventEmitter<User[]>()
  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>()

  constructor (public UsersService: UsersService) {
  }

  ngOnInit () {
    this.users = this.UsersService.getUsers()

    this.searchForm = new FormControl()
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

  addItem () {
    console.log('this.newUser', this.newUser)
    const newUser : User = {...this.newUser, id: userData.length + 1, password: ''}
    this.users.push(newUser)
  }
}
