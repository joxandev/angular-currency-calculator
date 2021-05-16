import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CALCULATOR_ROUTE_DEFAULT } from '../../core/config';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardViewComponent implements OnInit {
  defaultCurrencyRoute: string[] = CALCULATOR_ROUTE_DEFAULT;

  constructor() {}

  ngOnInit() {}
}
