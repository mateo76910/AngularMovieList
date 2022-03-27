import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  projects: Project[]= []
  projectinfo:Project={ name:"",description:"",id:0}

  constructor(
    public http:HttpClient
  ) { 
    this.getProjects().subscribe(data =>{
      this.ProjectsData.next(data.projects)
    })
  }

  getProjects():Observable<{projects:Project[]}>{
    return this.http.get<{projects:Project[]}>("/api/projects")
  }

  removeProject(project:Project):Observable<{message:string}>{
     return this.http.delete<{message:string}>(`/api/projects/${project.id}`)
  }

  addProject(project:Project):Observable<{message:string,project:Project}>{
    return this.http.post<{message:string,project:Project}>("/api/projects",project);
 }

 editProject(project:Project):Observable<{message:string,project:Project}>{
   return this.http.put<{message:string,project:Project}>("/api/projects",project)
 }

  ProjectsData:BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(this.projects)

  isEditBoolean:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ProjectInfo:BehaviorSubject<Project> = new BehaviorSubject<Project>(this.projectinfo)
}
  
