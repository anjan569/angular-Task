import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-database',
  template: `
            <customer-table (onSelect)="customerSelected($event)"></customer-table>
            <info-table [customerSlug]="currentCustomer"></info-table>
            `
})
export class AppComponent { 

  currentCustomer: string;
  customerSelected(value: string) {
    this.currentCustomer = value;
  }

}
