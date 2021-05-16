import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BaseStore<T> {
  private _state: BehaviorSubject<T>;
  private _state$: Observable<T>;

  constructor(initialState: T) {
    this._state = new BehaviorSubject(initialState);
    this._state$ = this._state.asObservable();
  }

  get state$(): Observable<T> {
    return this._state$;
  }

  get state(): T {
    return this._state.getValue();
  }

  set setState(newState: T) {
    this._state.next(newState);
  }

  dispatch(action: { type: string; payload: any }): void {
    this.setState = this.reducer(action);
  }

  abstract reducer(action: any): T;
}
