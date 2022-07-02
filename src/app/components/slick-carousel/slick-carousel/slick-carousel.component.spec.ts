import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickCarouselComponent } from './slick-carousel.component';

describe('SlickCarouselComponent', () => {
  let component: SlickCarouselComponent;
  let fixture: ComponentFixture<SlickCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlickCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
    
  // new test by ngentest
  // it('should run #slickInit()', async () => {
    
  //   component.slickInit({});
    
  // });
    
  // new test by ngentest
  // it('should run #breakpoint()', async () => {
    
  //   component.breakpoint({});
    
  // });
    
  // new test by ngentest
  // it('should run #afterChange()', async () => {
    
  //   component.afterChange({});
    
  // });
    
  // new test by ngentest
  // it('should run #beforeChange()', async () => {
    
  //   component.beforeChange({});
    
  // });
});