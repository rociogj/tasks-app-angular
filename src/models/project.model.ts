export class Project {
  pid: number
  name: string
  date: Date

  constructor (pid: number, name: string, date: Date) {
    this.pid = pid
    this.name = name
    this.date = date
  }
}