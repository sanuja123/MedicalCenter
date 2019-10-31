import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamacistHomeComponent } from './phamacist-home.component';

describe('PhamacistHomeComponent', () => {
  let component: PhamacistHomeComponent;
  let fixture: ComponentFixture<PhamacistHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamacistHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamacistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
