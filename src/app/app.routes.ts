import { Routes } from '@angular/router';
import { CustomersByCountryComponent } from './customers-by-country/customers-by-country.component';
import { CustomerOrdersInformationComponent } from './customer-orders-information/customer-orders-information.component';


export const routes: Routes = [

    { path: '', redirectTo: '/customers-by-country', pathMatch: 'full' },
    { path: 'customers-by-country', component: CustomersByCountryComponent },
    { path: 'customer-orders/:id', component: CustomerOrdersInformationComponent }
];
