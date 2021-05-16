import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, INITIAL_STATE } from './../../store/store.service';
import { GOOGLE_AUTH_URL, KEY, SIGNIN_URL } from '../config';

@Injectable()
export class AuthService {
  private _baseUrl: string = GOOGLE_AUTH_URL;

  private _isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _isAuth$: Observable<boolean> = this._isAuth.asObservable();

  constructor(private http: HttpClient, private store: Store) {}

  signUp(userData: object): Observable<object> {
    const payload = { ...userData, returnSecureToken: true };
    const url = `${this._baseUrl}/signupNewUser?key=${KEY}`;

    return this.http.post(url, userData);
  }

  get isAuth(): Observable<boolean> {
    return this._isAuth$;
  }

  get tokenExpired(): boolean {
    const now = new Date();
    const expiryToken = localStorage.getItem('tokenExpires');

    if (!expiryToken) {
      return true;
    }

    return now > new Date(Number(expiryToken));
  }

  autoLog(): void {
    // TO DO: Check token expiry date
    if (localStorage.getItem('token') && !this.tokenExpired) {
      this._isAuth.next(true);
    } else if (localStorage.getItem('token')) {
      this.signOut();
    }
  }

  signIn(userData): Observable<object> {
    const login = {
      ...userData,
      returnSecureToken: true
    };

    return this.http
      .post(`${SIGNIN_URL}${KEY}`, {
        ...login
      })
      .pipe(
        tap(res => {
          this._isAuth.next(true);
          localStorage.setItem('token', res['idToken']);
          localStorage.setItem('userId', res['localId']);
          const expiryTokenDate = new Date().getTime() + 60 * 60 * 1000;
          localStorage.setItem('tokenExpires', expiryTokenDate.toString());
        })
      );
  }

  signOut(): void {
    // TO TO: Handle the store reset
    // this.store.setState = INITIAL_STATE;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpires');
    this._isAuth.next(false);
  }
}
