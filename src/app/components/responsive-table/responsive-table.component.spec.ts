import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTable } from './responsive-table.component';

describe('ResponsiveTableComponent', () => {
  let component: ResponsiveTable;
  let fixture: ComponentFixture<ResponsiveTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveTable ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
