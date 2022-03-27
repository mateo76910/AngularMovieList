
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Bio } from './types';



@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {



  constructor(
    public http:HttpClient
  ) {
    this.getBiography().subscribe(data =>{
      console.log(data.message)
      this.ProfileData.next(data.biography)})
  }
 
  getBiography():Observable<{message:string,biography:Bio}>{
      return this.http.get<{message:string,biography:Bio}>("/api/bio")

    }
    biography:Bio={
      firstName:"",
      lastName:"",
      url:"",
      about:""
    }
  ProfileData:BehaviorSubject<Bio> = new BehaviorSubject<Bio>(this.biography)



 



}
