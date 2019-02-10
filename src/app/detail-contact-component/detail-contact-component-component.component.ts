import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
 import {ContactService} from"../service/contact.service";

@Component({
  selector: 'app-detail-contact-component-component',
  templateUrl: './detail-contact-component-component.component.html',
  styleUrls: ['./detail-contact-component-component.component.css']
})
export class DetailContactComponentComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
              private router:Router, 
              private contactService:ContactService) { }
  contact={};
  id:number;

  ngOnInit() {
    this.id=+this.route.snapshot.params['id'];
    this.contactService.getContact(this.id)
    .subscribe(
      data=>this.contact=data
    );
  }
  }

