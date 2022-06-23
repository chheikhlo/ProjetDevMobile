import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-qrcode',
  templateUrl: './mon-qrcode.page.html',
  styleUrls: ['./mon-qrcode.page.scss'],
})
export class MonQrcodePage implements OnInit {

  data = window.localStorage.getItem('matricule');

  constructor() {
    console.log(this.data);
  }

  ngOnInit() {
  }

}
