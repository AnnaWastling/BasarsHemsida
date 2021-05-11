import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'header', cols: 6, rows: 1 },
          { title: 'aktivitetsschema', cols: 6, rows: 1 },
          { title: 'skolschema', cols: 6, rows: 1 },
          { title: 'nolleboken', cols: 6, rows: 1 },
          { title: 'klassföreståndare', cols: 6, rows: 1 },
          { title: 'huvudklassfaddrar', cols: 6, rows: 1 }
        ];
      }

      return [
        { title: 'header', cols: 6, rows: 1},
        { title: 'aktivitetsschema', cols: 2, rows: 1 },
        { title: 'skolschema', cols: 2, rows: 1 },
        { title: 'nolleboken', cols: 2, rows: 1 },
        { title: 'klassföreståndare', cols: 6, rows: 1 },
        { title: 'huvudklassfaddrar', cols: 6, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
