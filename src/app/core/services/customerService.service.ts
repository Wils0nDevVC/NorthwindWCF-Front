import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceSoap {

  private serviceUrl = 'http://localhost:56974/CustomerService.svc'; // URL de tu servicio WCF

  constructor(private http: HttpClient) {}

  getOrdersByCustomerId(customerId: string): Observable<Order[]> {
    const body = this.createSoapRequest(); // Usar el método modificado
    return this.sendSoapRequest(body);
  }

  getCustomersByCountry(country: string): Observable<Customer[]> {
    const body = this.createSoapRequest(); // Usar el método modificado
    console.log(body); // Para asegurarte de que el cuerpo es correcto

    return this.sendSoapRequest(body);
  }

  getCustomerOrders(customerId: string): Observable<Order[]> {
    const body = this.createSoapRequest(); // Usar el método modificado
    return this.sendSoapRequest(body);
  }

  trackAction(urlRequest: string, sourceIp: string): Observable<any> {
    const body = this.createSoapRequest(); // Usar el método modificado
    return this.sendSoapRequest(body);
  }

  // Modificado para enviar un body fijo
  private createSoapRequest(): string {
        return `soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="http://tempuri.org/">
         <soapenv:Header/>
         <soapenv:Body>
            <app:GetCustomersByCountry>
               <app:country>USA</app:country>
            </app:GetCustomersByCountry>
         </soapenv:Body>
      </soapenv:Envelope>`;
  }

  private sendSoapRequest(body: string): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'http://tempuri.org/ICustomerService/GetCustomersByCountry',
      });

    return this.http.post<any>(this.serviceUrl, body, { headers });
  }
}
