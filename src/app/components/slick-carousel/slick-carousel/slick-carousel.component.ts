import { Component, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: [
    './slick-carousel.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SlickCarouselComponent   {

  slidecount = 0;
  activeSlide: string;
  document: any;
  slides = [
    {
      title: "Top Fundraisers"
    } ,
    {title: "Top Teams"},
    {title: "Top Donors"},
    {title: "Top Cities"}
  ]; 

  constructor(
    elementRef: ElementRef
  ) { }


  slideConfig = {
    slidesToShow: 1, 
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 250,
    fade: true,
    dots: true,
    arrow: true,
    appendDots: '.leaderboard-dots',
    customPaging: function(slider, i, slides) {      
      let title = document.getElementsByClassName('slide')[i].getAttribute('data-title');
      return '<button class="btn custom-slick-dots" id=leaderBoardDot-' + i + ">" + title +  "</button>";
    },
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev" aria-label="Previous" aria-hidden="true"></button>',
    nextArrow:
      '<button type="button" class="slick-arrow slick-next" aria-label="Next" aria-hidden="true"></button>',

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
    console.log('beforeChange', e);
  }

}
