import { Injectable } from '@angular/core'
import { Project } from 'src/models/project.model'
import projectData from 'src/assets/projects.json'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[]

  constructor() { }

  getProjects (): Project[] {
    this.projects = projectData
    return this.projects
  }
}
