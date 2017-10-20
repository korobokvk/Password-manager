import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class AuthentificationService {

  constructor() { }

  public storage(name, pass): Observable<any> {

    return Observable.create(observer => {

      if (localStorage.getItem(name) === null) {
        const password = {password: pass};
        localStorage.setItem(name, JSON.stringify(password));
        observer.next(JSON.parse(localStorage.getItem(name)))
      }
      else {
        const storageObj = JSON.parse(localStorage.getItem(name));
        storageObj.password === pass ? observer.next(JSON.parse(localStorage.getItem(name))) : observer.error('Wrong credentials')
      }

    });



  }
}
