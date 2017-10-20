import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from "../authentification.service"

@Component({
  selector: 'app-auth',
  templateUrl: '../../../customisation/auth.component.html',
  styleUrls: ['../../../customisation/css/auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public _auth: AuthentificationService) { }

  auth(name, pass) {

    this._auth.storage(name, pass).subscribe(data => {
      console.log(data)
    })
  }
  ngOnInit() {
  }

}
