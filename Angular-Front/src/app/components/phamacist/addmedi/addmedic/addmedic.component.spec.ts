import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicComponent } from './addmedic.component';

describe('AddmedicComponent', () => {
  let component: AddmedicComponent;
  let fixture: ComponentFixture<AddmedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
