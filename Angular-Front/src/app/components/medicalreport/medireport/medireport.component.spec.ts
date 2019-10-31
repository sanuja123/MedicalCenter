import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedireportComponent } from './medireport.component';

describe('MedireportComponent', () => {
  let component: MedireportComponent;
  let fixture: ComponentFixture<MedireportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedireportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedireportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
