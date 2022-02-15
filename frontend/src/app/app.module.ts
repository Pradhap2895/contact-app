import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { routingComponet } from './routes.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationComponent,
    SuccessComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    routingComponet,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
