import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-with-thumbnail',
  templateUrl: './with-thumbnail.component.html',
  styleUrls: [
    '../scss/scoreboardBase.scss',
    './with-thumbnail.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
  
})
export class WithThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
