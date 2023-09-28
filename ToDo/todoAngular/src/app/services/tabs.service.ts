import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  activeTap : number;

  constructor( private location : Location) { 
    this.activeTap = -1;

    this.examinePath();

    location.onUrlChange((url,state) => {
      this.examinePath();
    });
  }

  changeTab(tab: number) : void {

    if(this.activeTap === tab) {
      return;
    }

    switch(tab) {
      case 1:
      default:
        this.activeTap = 1;
        window.history.pushState(null, "Tab1", "/all-items");
        break;
      case 2:
        this.activeTap = 2;
        window.history.pushState(null, "Tab2", "/pending-items");
        break;
      case 3:
        this.activeTap = 3;
        window.history.pushState(null, "Tab3", "/completed-items");
        break;
    }
  }

  examinePath(){
    switch(window.location.pathname){
      case "/all-items":
      case "":
      case "/pending-items":
        this.activeTap = 2;
        break;
      case "/completed-items":
        this.activeTap = 3;
        break;
      default:
        this.activeTap = 1;
        break;
    }

    console.log(this.activeTap);
  }
}
