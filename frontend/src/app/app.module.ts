import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { routingComponet } from './routes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    routingComponet,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
