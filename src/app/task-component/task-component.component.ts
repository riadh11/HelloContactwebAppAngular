import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {
  tasks;

  constructor(public authService:AuthenticationServiceService, private router:Router) { }

  ngOnInit() {
    this.authService.getTasks()
    .subscribe(data=>{
       this.tasks=data; 
      },
      err=>
      { 
      this.authService.login(this.tasks.user); 
      this.router.navigateByUrl('/login') })
  } 
  }

