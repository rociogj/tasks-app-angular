import { Component, OnInit } from '@angular/core'
import { Project } from 'src/models/project.model'
import { ProjectsService } from 'src/services/projects.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any

  constructor(private ProjectsService: ProjectsService) {
  }

  ngOnInit() {
    this.ProjectsService.getProjects()
      .subscribe((data: any) => {
        console.log('data', data)
        this.projects = data
      })
  }

}
