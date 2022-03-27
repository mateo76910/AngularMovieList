import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';
import { Project } from '../types';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[] = []
  ime:string=""
  opis:string=""
  id:number=0;
  isEdit:boolean=false

  constructor(
    public ps:ProjectsServiceService
  ) { 
    this.ps.ProjectsData.subscribe((proj:Project[]) =>{
      this.projects=proj;
    })

  }
  Delete(i:number){
    let project = this.projects.find(a => a.id == i)
    if(project){
      this.ps.removeProject(project).subscribe(
       data => {
         console.log(data.message);
         this.ps.getProjects().subscribe( 
           data => {
             this.ps.ProjectsData.next(data.projects)
           }
          )
        }
      )
    }
  }
  Edit(i:number){
    this.ps.isEditBoolean.next(true);
    let project = this.projects.find(a => a.id == i)
    if(project){
      this.ps.ProjectInfo.next({name:project.name,description:project.description,id:project.id});
    }
    
  }

  Add():void{
    this.ps.ProjectInfo.next({ name:"",description:"",id:0})
  }

  ngOnInit(): void {
  }

}
