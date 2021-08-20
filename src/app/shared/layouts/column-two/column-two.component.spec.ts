import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTwoComponent } from './column-two.component';

describe('ColumnTwoComponent', () => {
  let component: ColumnTwoComponent;
  let fixture: ComponentFixture<ColumnTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
