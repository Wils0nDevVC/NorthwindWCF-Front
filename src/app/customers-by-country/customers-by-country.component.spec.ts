import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByCountryComponent } from './customers-by-country.component';

describe('CustomersByCountryComponent', () => {
  let component: CustomersByCountryComponent;
  let fixture: ComponentFixture<CustomersByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersByCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
