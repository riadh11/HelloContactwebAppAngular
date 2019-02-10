import {Injectable} from"@angular/core";
 import {Http} from"@angular/http";
 import  "rxjs/add/operator/map"; 
 import  "rxjs/add/operator/catch" 
 import {Observable} from "rxjs"; 
 @Injectable()
  export class ContactService{
       constructor(private http:Http){}
getAllContacts():Observable<any>{
     return this.http.get("http://localhost:8080/contacts")
     .map(resp=>resp.json());
}
 getContact(id:number):Observable<any>{
       return this.http.get("http://localhost:8080/contacts/"+id)
        .map(resp=>resp.json());
}
 saveContact(contact){ 
     return this.http.post("http://localhost:8080/contacts",contact) 
.map(resp=>resp.json()); } 
deleteContact(id:number){
      return this.http.delete("http://localhost:8080/contacts/"+id)
.map(resp=>resp); } }