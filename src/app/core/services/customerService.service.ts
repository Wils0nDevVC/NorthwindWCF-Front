import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceSoap {

  private serviceUrl = 'http://localhost:56974/CustomerService.svc'; 

  constructor(private http: HttpClient) {}

   getOrdersByCustomerId(customerId: string): Observable<Order[]> {
    const body = this.createSoapRequest('GetCustomerOrders', { customerId });
    return this.sendSoapRequest(body,'GetCustomerOrders');
  }


  getCustomersByCountry(country: string): Observable<Customer[]> {
    const body = this.createSoapRequest('GetCustomersByCountry', { country });
    return this.sendSoapRequest(body,'GetCustomersByCountry');
  }

  getCustomerOrders(customerId: string): Observable<Order[]> {
    const body = this.createSoapRequest('GetCustomerOrders', { customerId });
    return this.sendSoapRequest(body,'GetCustomerOrders');
  }

  trackAction(urlRequest: string, sourceIp: string): Observable<any> {
    const body = this.createSoapRequest('TrackAction', { urlRequest, sourceIp });
    return this.sendSoapRequest(body,'TrackAction');
  }

  private createSoapRequest(action: string, params: any): string {
    let body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
                  <soapenv:Header/>
                  <soapenv:Body>
                    <tem:${action}>`;

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        body += `<tem:${key}>${params[key]}</tem:${key}>`;
      }
    }

    body += `</tem:${action}>
            </soapenv:Body>
          </soapenv:Envelope>`;
    return body;
  }

  private sendSoapRequest(body: string, action: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      SOAPAction: `http://tempuri.org/ICustomerService/${action}`
    });

    console.log(headers)

    return this.http.post<any>(this.serviceUrl, body, { headers });
  }
}
