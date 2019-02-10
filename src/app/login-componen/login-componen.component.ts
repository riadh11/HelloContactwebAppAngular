import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service';
@Component({
  selector: 'app-login-componen',
  templateUrl: './login-componen.component.html',
  styleUrls: ['./login-componen.component.css']
})
export class LoginComponenComponent implements OnInit {
 mode:number=0;
  constructor(public authService:AuthenticationServiceService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(user){ 
    this.authService.login(user) 
       .subscribe(resp=>
      { let jwt=resp.headers.get('Authorization'); 
      // console.log(resp.headers.get('Authorization')); 
      this.authService.saveTask(jwt); 
      this.router.navigateByUrl('/contacts'); }, 
      err=>{
         this.mode=1;
         } )
        
  }

}
