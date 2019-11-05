import { Component, OnInit } from '@angular/core'
import { User } from 'src/models/user.model'
import userData from 'src/assets/users.json'
import { ThrowStmt } from '@angular/compiler'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = userData
  tableIsVisible: boolean = true
  searchValue: string

  constructor () {
    console.log('this.searchValue', this.searchValue)
  }

  ngOnInit () {
  }

  toggleTable () {
    this.tableIsVisible = !this.tableIsVisible
  }

  onChanged () {
    this.filterTable()
  }

  filterTable () {
    this.users = this.searchValue ? userData.filter(user => user.name.toLowerCase().includes(this.searchValue)) : userData
  }
}
