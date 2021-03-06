import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Tekniskt basår';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Start',
        link: './start',
        index: 0,
      },
      {
        label: 'Aktivitetsschema',
        link: './aktivitetsschema',
        index: 1,
      },
      {
        label: 'Schema Basåret',
        link: './klasschema',
        index: 2,
      },
      {
        label: 'Nolleboken',
        link: './nolleboken',
        index: 3,
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
        AOS.init({duration: 1200});

  }
}
