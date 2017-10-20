import { Injectable, OnInit } from '@angular/core';


@Injectable()
export class DataService {
  name: string;
  setData: any[] = [];

  setLocal() {
    localStorage.setItem(this.name, JSON.stringify(this.setData));
  }
  async setStorage(data) {
    this.setData = JSON.parse(localStorage.getItem(this.name));
    await this.setData['items'].push(data);
    this.setLocal()

  }

  getItems() {
    if(localStorage.getItem(this.name) !== null)
    this.setData = JSON.parse(localStorage.getItem(this.name));
  }


  async changeItems(url, pass, name) {
    const findObj = this.setData['items'].findIndex((elem) => {
      return elem.siteNames == name
    });
    console.log(findObj);

    this.setData['items'][findObj].siteUrls = url.value;
    this.setData['items'][findObj].sitePasses = pass.value;

    await this.setLocal()
  }

  async deleteItem(name) {
    const findObj =  this.setData['items'].findIndex((elem) => {
      return elem.siteNames == name
    });

    this.setData['items'].splice(findObj, 1);

    await this.setLocal()
  }


}
