import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUpcomingappComponent } from './patient-upcomingapp.component';

describe('PatientUpcomingappComponent', () => {
  let component: PatientUpcomingappComponent;
  let fixture: ComponentFixture<PatientUpcomingappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientUpcomingappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientUpcomingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
