import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signIn(form: NgForm): void {
    const signInSubscription = this.authService
      .signIn(form.value)
      .subscribe(() => {
        this.router.navigate(['admin', 'dashboard']);
      });
    this.subscriptions.push(signInSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
