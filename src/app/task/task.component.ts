import { Component, OnInit } from '@angular/core'
import { Task } from 'src/models/task.model'
import taskData from 'src/assets/tasks.json'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = taskData

  constructor() { }

  ngOnInit() {
  }

}
