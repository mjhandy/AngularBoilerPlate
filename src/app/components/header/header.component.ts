import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  theme: string;
  height: string;

  ngOnInit(): void {
    this.theme = 'header-one' 
  }

}
