import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Project } from 'src/models/project.model'
import projectData from 'src/assets/projects.json'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[]

  constructor(private http: HttpClient) { }

  getProjects (): any {
    // this.projects = projectData
    // return this.projects
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
