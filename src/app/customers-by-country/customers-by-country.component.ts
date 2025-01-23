import { CustomerService } from './../core/services/customer.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { GridModule } from '@progress/kendo-angular-grid';  
import { FormsModule } from '@angular/forms';
import { Customer } from '../core/interfaces/customer';
import { HttpClientModule } from '@angular/common/http';
import { CustomerServiceSoap } from '../core/services/customerService.service';

@Component({
  selector: 'app-customers-by-country',
  standalone: true,
  imports: [CommonModule, RouterLink, GridModule, FormsModule,HttpClientModule],  
  templateUrl: './customers-by-country.component.html',
  providers: [CustomerService,CustomerServiceSoap]
})
export class CustomersByCountryComponent {
  customers: Customer[] = [];  
  country: string = '';

  private readonly _customerService = inject(CustomerServiceSoap);


  searchCustomers() {
    this._customerService.getCustomersByCountry(this.country)
      .subscribe(data => {
        this.customers = data;
      });
  }
}
