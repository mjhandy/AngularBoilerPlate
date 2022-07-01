import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: [
    './slick-carousel.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SlickCarouselComponent implements OnInit {

  slidecount = 0;
  activeSlide: string;
  document: any;

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {title: "Top Fundraisers"},
    {title: "Top Teams"},
    {title: "Top Donors"},
    {title: "Top Cities"}
  ];  
  slideConfig = {
    slidesToShow: 1, 
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 250,
    fade: true,
    dots: true,
    appendDots: '.leaderboard-dots',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev" aria-label="Previous" aria-hidden="true"></button>',
    nextArrow:
      '<button type="button" class="slick-arrow slick-next" aria-label="Next" aria-hidden="true"></button>',

  };

  slickInit(e) {
    console.log('slick initialized');
    this.activeSlide = this.document.getElelmentsByClassName('active-slide')[0];
    
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange', e, e.currentSlide);
    this.slidecount = e.currentSlide;
    console.log('Current Slide: ', this.slidecount);
    // give the current slide focus
    this.activeSlide = this.document.getElelmentsByClassName('slide-active')[0];
    

  }
  
  beforeChange(e) {
    console.log('beforeChange', e);
  }

}
