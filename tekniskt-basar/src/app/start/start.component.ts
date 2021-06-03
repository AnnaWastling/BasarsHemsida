import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  isActive = false;
  navigate(){
  //do your any operations
  this.router.navigate(['aktivitetsschema']);
  }
  cols : number | undefined;
  rowspan = 1;
  colspan = 1;
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 3,
    xs: 1
  }

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
          this.rowspan = 1;
          this.colspan = 1;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
          this.rowspan = 1;
          this.colspan = 3;

        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
          this.rowspan = 1;
          this.colspan = 1;

        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
          this.rowspan = 2;
          this.colspan = 1;

        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
          this.rowspan = 2;
          this.colspan = 1;

        }
      }
    });
  }

  ngOnInit() {
  }
}
