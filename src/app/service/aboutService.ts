import { Injectable } from "@angular/core";

@Injectable()
export class AboutService{
    
    info={ nom: "RIADH ELKAMEL",
           email: "riadhelkamel1@hotmail.com",
           tel: "+216 58 802 332 "
          };
    comments=[];
    constructor(){}
 getInfos(){
       return this.info;
   } 
addInfos(c){
  c.date= new Date();
  this.comments.push(c);   
}
getAllCommets(){
    return this.comments;
}
}