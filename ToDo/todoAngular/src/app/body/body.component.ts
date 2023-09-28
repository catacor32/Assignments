import { Component } from '@angular/core';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(public tabsService: TabsService){}

}
