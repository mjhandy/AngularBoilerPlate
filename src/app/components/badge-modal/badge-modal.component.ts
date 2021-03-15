import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[data-comp="badgeModal"]',
  templateUrl: './badge-modal.component.html',
  styleUrls: ['./badge-modal.component.scss']
})
export class BadgeModalComponent implements OnInit {

  title = 'Badges'

  constructor() { }

  ngOnInit(): void {
  }

}
