import { Component, OnInit } from '@angular/core'
import { Project } from 'src/models/project.model'
import { ProjectsService } from 'src/services/projects.service'

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[]

  constructor(private ProjectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projects = this.ProjectsService.getProjects()
  }

}
