import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupandloginComponent } from './signupandlogin.component';

describe('SignupandloginComponent', () => {
  let component: SignupandloginComponent;
  let fixture: ComponentFixture<SignupandloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupandloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupandloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
