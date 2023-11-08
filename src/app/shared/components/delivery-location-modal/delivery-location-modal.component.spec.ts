import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryLocationModalComponent } from './delivery-location-modal.component';

describe('DeliveryLocationModalComponent', () => {
  let component: DeliveryLocationModalComponent;
  let fixture: ComponentFixture<DeliveryLocationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryLocationModalComponent]
    });
    fixture = TestBed.createComponent(DeliveryLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
