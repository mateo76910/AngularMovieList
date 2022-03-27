import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(
    public ps:ProjectsServiceService
  ) { 
    this.ps.isEditBoolean.subscribe(data =>{
      this.isEdit= data;
    })
    this.ps.ProjectInfo.subscribe(data=>{
      this.ime= data.name;
      this.opis = data.description;
      this.id = data.id
    })

  }
  ime:string=""
  opis:string=""
  id:number=0
  isEdit:boolean = false;

  Submit(){
    if(this.isEdit == true){
      this.ps.editProject({name:this.ime,description:this.opis,id:this.id}).subscribe(
        data =>{
          console.log(data);
          this.ps.getProjects().subscribe(
            data =>{
              this.ps.ProjectsData.next(data.projects)
            }
          )
        }
      )
      this.ps.isEditBoolean.next(false);
    }
    else{
      this.ps.addProject({name:this.ime,description:this.opis,id:0}).subscribe(
        data =>{
          console.log(data);
          this.ps.getProjects().subscribe(
            data =>{
              this.ps.ProjectsData.next(data.projects)
            }
          )
        }
      )
    }

  } 
  All():void{
    this.ps.isEditBoolean.next(false);
    this.ps.ProjectInfo.next({ name:"",description:"",id:0})
  }  

  ngOnInit(): void {
  }

}
