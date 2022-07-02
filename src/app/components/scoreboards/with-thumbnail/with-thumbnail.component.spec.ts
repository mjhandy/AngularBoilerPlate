import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithThumbnailComponent } from './with-thumbnail.component';

describe('WithThumbnailComponent', () => {
  let component: WithThumbnailComponent;
  let fixture: ComponentFixture<WithThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
