import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"profile"},
  {path:"profile",component:ProfileComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"projects/edit", component:ProjectFormComponent},
    {path:"projects/add",component:ProjectFormComponent},
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
