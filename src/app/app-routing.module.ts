import {ContactsComponent} from"./contacts/contacts.component";
 import {Routes, RouterModule} from"@angular/router"; 
 import {NgModule} from"@angular/core"; 
 import { DetailContactComponentComponent } from "./detail-contact-component/detail-contact-component-component.component";
 import { NewContactComponentComponent } from "./new-contact-component/new-contact-component.component";
import { AboutsComponent } from "./abouts/abouts.component";
 const appRoutes: Routes = [
    { path: 'about', component: AboutsComponent}, 
    { path: 'contacts', component: ContactsComponent},
   { path: 'detailContact/:id',component: DetailContactComponentComponent}, 
   { path: 'newContact', component: NewContactComponentComponent},
   { path: '', redirectTo: '/about', pathMatch: 'full' } 
  ];
    @NgModule({
       imports:
       [RouterModule.forRoot(appRoutes)],
   exports:
   [RouterModule] }) export class AppRoutingModule{ }