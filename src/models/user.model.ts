export class User {
  id: number
  name: string
  email: string
  password: string

  constructor (id: number, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

  getId () {
    return this.id
  }

  setId (id: number) {
    this.id = id
  }
}