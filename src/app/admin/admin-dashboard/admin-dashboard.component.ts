import { Component, OnInit } from '@angular/core';
import { CALCULATOR_ROUTE_DEFAULT } from '../../core/config';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
   defaultCurrencyRoute:string[] = CALCULATOR_ROUTE_DEFAULT;

  constructor() { }

  ngOnInit() {
  }

}