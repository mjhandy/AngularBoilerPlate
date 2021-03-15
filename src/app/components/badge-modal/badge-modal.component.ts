import { Component, NgModule, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';



@Component({
  selector: '[data-comp="badgeModal"]',
  templateUrl: './badge-modal.component.html',
  styleUrls: ['./badge-modal.component.scss']
})


export class BadgeModalComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {
  }

}
