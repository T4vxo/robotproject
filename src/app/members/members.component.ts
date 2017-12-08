import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  users = [
    {img:"assets/images/daniel_lundberg.jpg",
    title:"Daniel Lundberg",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel massa a lectus vulputate feugiat. Donec vitae eleifend sem.",
    mail:"daniel.lundberg@utb.vaxjo.se"},
    {img:"assets/images/daniel_lundberg.jpg",
      title:"Daniel Lundberg",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel massa a lectus vulputate feugiat. Donec vitae eleifend sem.",
      mail:"daniel.lundberg@utb.vaxjo.se"},
    {img:"assets/images/daniel_lundberg.jpg",
      title:"Daniel Lundberg",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel massa a lectus vulputate feugiat. Donec vitae eleifend sem.",
      mail:"daniel.lundberg@utb.vaxjo.se"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
