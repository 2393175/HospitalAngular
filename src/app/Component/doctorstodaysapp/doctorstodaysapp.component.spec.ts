import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorstodaysappComponent } from './doctorstodaysapp.component';

describe('DoctorstodaysappComponent', () => {
  let component: DoctorstodaysappComponent;
  let fixture: ComponentFixture<DoctorstodaysappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorstodaysappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorstodaysappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
