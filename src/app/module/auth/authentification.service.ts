import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthentificationService {
  password: object;
  constructor() { }

  public storage(name, pass): Observable<any> {
    this.password = { password: pass,
                      items: []};
    return Observable.create(observer => {

      if (localStorage.getItem(name) === null) {

        localStorage.setItem(name, JSON.stringify(this.password));

        observer.next(JSON.parse(localStorage.getItem(name)))
      }
      else {
        const storageObj = JSON.parse(localStorage.getItem(name));
        storageObj.password === pass ? observer.next(JSON.parse(localStorage.getItem(name))) : observer.error('Wrong credentials')
      }

    });



  }
}
