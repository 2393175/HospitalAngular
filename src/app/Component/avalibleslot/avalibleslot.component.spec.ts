import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalibleslotComponent } from './avalibleslot.component';

describe('AvalibleslotComponent', () => {
  let component: AvalibleslotComponent;
  let fixture: ComponentFixture<AvalibleslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvalibleslotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalibleslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
