import { Component, OnInit } from '@angular/core';

import  {routes} from '../routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routeComponents;
  constructor() { }

  ngOnInit() {
    this.routeComponents = routes;
  }

}
