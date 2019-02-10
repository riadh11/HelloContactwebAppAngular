import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  
  constructor(private http:HttpClient) { }

  getTasks(){
   return this.http.get('http://localhost:8080/contacts');
  }
  login(user){
    return this.http.post('http://localhost:8080/login'
    ,user,{observe:'response'});

  }
  getTasksV2(){
    return this.http.get('http://localhost:8080/contacts'),
    {headers:new HttpHeaders({'Authorization':'my-token'})};

  }
  saveTask(task){
    return this.http.post('http://localhost:8080/contacts',task,
    {headers:new HttpHeaders({'authorization':'my-token'})}); 
  }
}
