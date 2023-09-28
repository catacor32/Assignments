import { Component } from '@angular/core';
import { TabsService } from '../services/tabs.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public tapsServices: TabsService){

  }

}
