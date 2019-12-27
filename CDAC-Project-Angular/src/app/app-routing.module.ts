import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {ContactUsComponent} from './contact-us/contact-us.component';
//import { userInfo } from 'os';
=======
import { BodyComponent } from './body/body.component';
>>>>>>> ec4daadb835a156309679d204a57e71fa5b35094

const routes: Routes = [
  {
    path:'contact',
    component:ContactUsComponent

<<<<<<< HEAD
=======
const routes: Routes = [
  {
    path:'',
    component: BodyComponent
>>>>>>> ec4daadb835a156309679d204a57e71fa5b35094
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
