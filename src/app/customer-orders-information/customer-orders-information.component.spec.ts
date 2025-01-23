import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdersInformationComponent } from './customer-orders-information.component';

describe('CustomerOrdersInformationComponent', () => {
  let component: CustomerOrdersInformationComponent;
  let fixture: ComponentFixture<CustomerOrdersInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerOrdersInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrdersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
