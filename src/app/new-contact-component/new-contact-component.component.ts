import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-new-contact-component',
  templateUrl: './new-contact-component.component.html',
  styleUrls: ['./new-contact-component.component.css']
})
export class NewContactComponentComponent implements OnInit {
  contact={nom:"",prenom:"",email:"",dateNaissance:null,tel:""};
  mode="new";
  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }
  saveContact(){ 
    this.contactService.saveContact(this.contact) 
    .subscribe(
      data=>{this.mode='confirm';
      this.contact=data;}); 
    }
    newContact(){ 
    this.contact={nom:"",prenom:"",email:"",dateNaissance:null,tel:""}; 
    this.mode='new'; 

}
}
