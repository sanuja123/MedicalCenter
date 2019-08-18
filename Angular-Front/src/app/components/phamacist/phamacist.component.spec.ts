import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamacistComponent } from './phamacist.component';

describe('PhamacistComponent', () => {
  let component: PhamacistComponent;
  let fixture: ComponentFixture<PhamacistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamacistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
