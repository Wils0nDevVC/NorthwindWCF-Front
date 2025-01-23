import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = 'http://localhost:5000/CustomerService';

  constructor(private http: HttpClient) {}

  getCustomersByCountry(country: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/GetCustomersByCountry?country=${country}`);
  }
}
