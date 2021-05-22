import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'Tekniskt basår';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'start',
            link: './start',
            index: 0
        },
        {
            label: 'aktivitetsschema',
            link: './aktivitetsschema',
            index: 1
        }, {
            label: 'klasschema',
            link: './klasschema',
            index: 2
        }, {
            label: 'nolleboken',
            link: './nolleboken',
            index: 3
        }, {
          label: 'forestandare',
          link: './forestandare',
          index: 4
        }, {
          label: 'huvudklassfaddrar',
          link: './huvudklassfaddrar',
          index: 5
        },  
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}