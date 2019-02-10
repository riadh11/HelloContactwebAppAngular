import { BrowserModule} from'@angular/platform-browser'; 
import { NgModule} from'@angular/core';
 import {FormsModule} from"@angular/forms"; 
 import {HttpModule} from"@angular/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponentComponent } from './new-contact-component/new-contact-component.component';
import { LoginComponenComponent } from './login-componen/login-componen.component';
import { AboutService } from './service/aboutService';
import { ContactService } from './service/contact.service';
import { ExempleService } from './service/exempleService';
import { DetailContactComponentComponent } from './detail-contact-component/detail-contact-component-component.component';
@NgModule({ 
  declarations: [
    AppComponent,
    AboutsComponent,
    ContactsComponent,
    DetailContactComponentComponent,
    NewContactComponentComponent,
    LoginComponenComponent,



  ],
   imports: 
   [ BrowserModule,
    FormsModule, 
    HttpModule,
    AppRoutingModule, 
     
  ],
    providers: [AboutService,
                ContactService,
                ExempleService],
    bootstrap: [AppComponent] })
     export class AppModule{ }
