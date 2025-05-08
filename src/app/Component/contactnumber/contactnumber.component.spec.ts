import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnumberComponent } from './contactnumber.component';

describe('ContactnumberComponent', () => {
  let component: ContactnumberComponent;
  let fixture: ComponentFixture<ContactnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactnumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
