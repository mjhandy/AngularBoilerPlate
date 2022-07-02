import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutThumbnailComponent } from './without-thumbnail.component';

describe('WithoutThumbnailComponent', () => {
  let component: WithoutThumbnailComponent;
  let fixture: ComponentFixture<WithoutThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
