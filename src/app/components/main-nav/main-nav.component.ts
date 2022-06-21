import { Component, Input, OnInit } from '@angular/core';
import { ThrowStatement } from 'typescript';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: [
    './main-nav.component.scss',
    './main-nav-header-one.scss',
    './main-nav-header-two.scss',
  ]  
})
export class MainNavComponent implements OnInit {

  @Input() theme: string;

  constructor() { }

  ngOnInit(): void {
    console.debug(this.theme);
  }

}


