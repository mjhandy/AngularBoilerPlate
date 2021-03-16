import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccoridionComponent } from './basic-accoridion.component';

describe('BasicAccoridionComponent', () => {
  let component: BasicAccoridionComponent;
  let fixture: ComponentFixture<BasicAccoridionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAccoridionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAccoridionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
