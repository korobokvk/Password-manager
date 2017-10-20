import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from "../../auth/authentification.service";
import { DataService } from "../data-set.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: '../../../customisation/dashboard.component.html',
  styleUrls: ['../../../customisation/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hide = true;
  arrData: any[] = [];
  constructor(private _auth: AuthentificationService,
              private _data: DataService,
              ) { }

  change(url, pass, name) {
    this._data.changeItems(url, pass, name);
    console.log(url.value, pass.value, name);
  }

  deleteItem(name) {
    this._data.deleteItem(name)
  }
  setData(siteName, siteUrl, sitePass) {

    const finalObject = {
          siteNames: siteName,
          siteUrls: siteUrl,
          sitePasses: sitePass
    };

    this._data.setStorage(finalObject);
    this.arrData = this._data.setData;


  }



  ngOnInit() {
    this.arrData = this._data.setData;

  }

}
