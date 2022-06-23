import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-reunion',
  templateUrl: './in-reunion.page.html',
  styleUrls: ['./in-reunion.page.scss'],
})
export class InReunionPage implements OnInit {
  data = window.localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
  }

}
