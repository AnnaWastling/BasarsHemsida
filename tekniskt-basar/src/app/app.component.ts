import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tekniskt basår';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'aktivitetsschema',
            link: './aktivitetsschema',
            index: 0
        }, {
            label: 'klasschema',
            link: './klasschema',
            index: 1
        }, {
            label: 'nolleboken',
            link: './nolleboken',
            index: 2
        }, {
          label: 'forestandare',
          link: './forestandare',
          index: 3
        }, {
          label: 'huvudklassfaddrar',
          link: './huvudklassfaddrar',
          index: 4
        },  
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}