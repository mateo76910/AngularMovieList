import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Bio } from '../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  biography:Bio = {
    firstName:"",
    lastName:"",
    url:"",
    about:""
  }

  constructor(
    public ps:ProfileServiceService
  ) {
    this.ps.ProfileData.subscribe((bio:Bio)=>{
     this.biography=bio;
 })
   }

  ngOnInit(): void {
  }

}
