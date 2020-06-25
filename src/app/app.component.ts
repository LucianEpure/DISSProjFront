import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { BkLayout } from '@uibakery/kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  defaultLayout: BkLayout = {
    paddings: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTopUnit: "px",
      paddingRightUnit: "px",
      paddingBottomUnit: "px",
      paddingLeftUnit: "px"
    },
    header: false,
    sidebar: true
  };

  layout$: Observable<BkLayout> = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['layout'] || this.defaultLayout;
      }),
      shareReplay(),
    );

  padding$: Observable<string> = this.layout$
    .pipe(
      map((layout: BkLayout) => this.getPaddingCssValue(layout.paddings)),
    );
  items =   [
    // {
    //   "title": "Attendance Register",
    //   "link": "/Attendance-Register",
    //   "children": null
    // },
    // {
    //   "title": "Information",
    //   "link": "/Information",
    //   "children": null
    // },
    // {
    //   "title": "Time Tracking",
    //   "link": "/Time-Tracking",
    //   "children": null
    // },
    // {
    //   "title": "Employee Voice",
    //   "link": "/Employee-voice",
    //   "children": null
    // }
    {
      "title": "Employees voice",
      "link": "/Employees-voice",
      "children": null
    },
    {
      "title": "Employees",
      "link": "/Employees",
      "children": null
    },
    {
      "title": "Create form",
      "link": "Create-form",
      "children": null
    }
  ];

  constructor(private router: Router) {
  }

  private getPaddingCssValue(paddings): string {
    return `${paddings.paddingTop}${paddings.paddingTopUnit} ` +
           `${paddings.paddingRight}${paddings.paddingRightUnit} ` +
           `${paddings.paddingBottom}${paddings.paddingBottomUnit} ` +
           `${paddings.paddingLeft}${paddings.paddingLeftUnit}`;
  }
}
