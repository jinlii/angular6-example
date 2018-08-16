import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'; // angualr 6 way
import { Http, Response } from '@angular/http';


import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:Http) { }

  // It can take a callback. It could return a Promise. It could return an Observable.
  getHeroes(): Observable<Hero[]> {
    // Returns an Observable instance that synchronously delivers the values provided as arguments.
    return of(HEROES); // return an observable
  }

  getHeroesWithObservable(): Observable<Hero[]> { // .pipe.map
    return this.http.get('http://localhost:4200/data/heroes.json').pipe(map((res: Response) => res.json()));
  }

}
