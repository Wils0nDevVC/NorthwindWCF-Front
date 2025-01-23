import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './../core/services/order.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { Order } from '../core/interfaces/order';
import { CustomerServiceSoap } from '../core/services/customerService.service';



@Component({
  selector: 'app-customer-orders-information',
  standalone: true, 
  imports: [CommonModule, GridModule],
  templateUrl: './customer-orders-information.component.html',
    providers: [OrderService,ActivatedRoute,HttpClientModule,CustomerServiceSoap]
  
})
export class CustomerOrdersInformationComponent {
  orders: Order[] = [];  
  customerId: string = '';

    private readonly _orderService = inject(CustomerServiceSoap);
      private readonly _route = inject(ActivatedRoute);
    

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.customerId = params.get('id')!;
      this.getOrders();
    });
  }

  getOrders() {
    this._orderService.getOrdersByCustomerId(this.customerId)
      .subscribe(data => {
        this.orders = data;
      });
  }
}
