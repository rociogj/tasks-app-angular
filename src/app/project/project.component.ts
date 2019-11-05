import { Component, OnInit } from '@angular/core'
import { Project } from 'src/models/project.model'
import projectData from 'src/assets/projects.json'

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = projectData

  constructor() { }

  ngOnInit() {
  }

}
