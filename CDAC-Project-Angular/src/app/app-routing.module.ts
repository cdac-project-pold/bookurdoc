import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'',
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
