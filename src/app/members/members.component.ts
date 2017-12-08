import { Component, OnInit } from '@angular/core';
import {users} from '../page.data';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  users = users; //hämtar data från page.data.ts

  constructor() { }

  ngOnInit() {
  }

}
