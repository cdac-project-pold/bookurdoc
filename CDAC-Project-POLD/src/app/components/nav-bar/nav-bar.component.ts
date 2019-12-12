import { Component, OnInit, NgModule } from '@angular/core';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@NgModule({
  declarations:[NavBarComponent,AboutUsComponent]
})
export class NavBarComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
