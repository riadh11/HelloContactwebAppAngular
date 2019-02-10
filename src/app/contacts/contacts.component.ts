import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts=[];
  constructor(private contactService:ContactService,
               private router:Router ) { }

  ngOnInit() {
    this.contactService.getAllContacts()
    .subscribe(
      data=>this.contacts=data,
      err=>console.log('ERROR')
    );
  }

  detailContact(id:number){
    this.router.navigate(["/detailContact",id]);
  }
  deleteContact(id:number){
    this.contactService.deleteContact(id)
     .subscribe(
       data=>this.ngOnInit()
     );
  }

}
