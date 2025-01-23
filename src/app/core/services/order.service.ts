import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string = 'http://localhost:5000/CustomerService';

  constructor(private http: HttpClient) {}

  // Método para obtener las órdenes de un cliente
  getOrdersByCustomerId(customerId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/GetOrdersByCustomerId?customerId=${customerId}`);
  }
}
