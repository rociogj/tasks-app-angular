export class Task {
  tid: number
  description: string
  time: number
  project: number

  constructor (tid: number, description: string, time: number, project: number) {
    this.tid = tid
    this.description = description
    this.time = time
    this.project = project
  }
}