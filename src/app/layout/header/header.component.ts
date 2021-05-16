import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';

type ViewModel = { isAuth: boolean; showUi: boolean };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showUi$: Observable<boolean> = of(true);
  isAuth$: Observable<boolean> = this.authService.isAuth;
  navViewModel$: Observable<ViewModel> = combineLatest([
    this.showUi$,
    this.isAuth$
  ]).pipe(map(([showUi, isAuth]) => ({ showUi, isAuth })));

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['dashboard']);
  }
}
