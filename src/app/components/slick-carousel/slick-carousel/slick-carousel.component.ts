import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: [
    './slick-carousel.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SlickCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1
  };

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
