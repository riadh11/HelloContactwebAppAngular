import { Component } from '@angular/core';
import {  AboutService } from '../service/aboutService';


@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent {
  
  constructor(private aboutService: AboutService){
  }

  /* info={ nom:"ELkamel Riadh",
          email:"riadhelkamel1@hotmail.com", 
          tel:"+216 58 802 332 " }; 
  comments=[]; 
 comment={date:null, message:''};
    newComment=false;
  constructor() { }

  ngOnInit() {
  }
  addComment(){
    if (this.comment.message!=''){
      this.comment.date=new Date();
      this.comments.push({
        date:this.comment.date,
        message:this.comment.message
       });
      this.comment.message='';
    }
  } */
  info= this.aboutService.getInfos();
  comments=this.aboutService.getAllCommets();
  comment={id:0, message:'',date:null};
  newComment=false;
  addInfos(){
    if(this.comment.message!=''){
      this.aboutService.addInfos
      ({message: this.comment.message});
      this.comments=this.aboutService.getAllCommets();
      this.comment.message='';
    }
    }
    
  }



