
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PhamacistdashComponent } from './phamacistdash.component';

describe('PhamacistdashComponent', () => {
  let component: PhamacistdashComponent;
  let fixture: ComponentFixture<PhamacistdashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [PhamacistdashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhamacistdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
