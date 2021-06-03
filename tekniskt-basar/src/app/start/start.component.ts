import {  Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [ // DEFAULT STATES
    trigger('enterLeave', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateY(100vw)'
        }),
        animate('1.5s ease-in',
          style({
            opacity: 1,
            transform: 'scale(1)'
          })
        )
      ],)])]
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
          this.rowspan = 2;
          this.colspan = 1;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
          this.rowspan = 2;
          this.colspan = 1;

        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
          this.rowspan = 2;
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
