import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        Made with <3 by <a href="https://twitter.com/chrisoncode">Chris from Scotch</a>
      </p>
    </div>
    </div>
    </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
