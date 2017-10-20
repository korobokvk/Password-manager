import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthentificationService } from "../authentification.service";
import { AuthGuardService } from "../auth-guard.service";
import { DataService } from "../../dashboard/data-set.service"


@Component({
  selector: 'app-auth',
  templateUrl: '../../../customisation/auth.component.html',
  styleUrls: ['../../../customisation/css/auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public _auth: AuthentificationService,
              private _guard: AuthGuardService,
              private router: Router,
              public _data: DataService)
  { }

  auth(name, pass) {
    this._data.name = name;
    this._data.getItems();
    this._data.getItems();
    this._auth.storage(name, pass).subscribe((data) => {
      this.router.navigate(['/dash']);
      this._guard.isAuthenticated = true;


    },
      error => alert(error)
    )
  }


  ngOnInit() {
  }

}
