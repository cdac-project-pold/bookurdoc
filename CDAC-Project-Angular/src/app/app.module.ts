import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ContactUsComponent } from './contact-us/contact-us.component';
=======
import { BodyComponent } from './body/body.component';
>>>>>>> ec4daadb835a156309679d204a57e71fa5b35094

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContactUsComponent
=======
    BodyComponent
>>>>>>> ec4daadb835a156309679d204a57e71fa5b35094
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
