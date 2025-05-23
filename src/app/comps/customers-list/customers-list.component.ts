import { Component, OnInit } from '@angular/core';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  _ar: any[] = [];
  constructor(private dbFb: DbFbService) { }

  ngOnInit(): void {
    this._ar = this.dbFb.getCustomersArrayData();
  }

  delCustomer(_id: any): void {
    if (confirm("Are you sure you want to delete?")) {
      this.dbFb.delCustomer(_id);
    }
  }

  searchByFirstName(ev: any): void {
    //capitalizing...
    let a: string = ev.target.value.substr(0, 1).toUpperCase() + ev.target.value.substr(1).toLowerCase();
    this.dbFb.filterArrayBy(a, "first")
  }
  searchByLastName(ev: any): void {
    //capitalizing...
    let a: string = ev.target.value.substr(0, 1).toUpperCase() + ev.target.value.substr(1).toLowerCase();
    this.dbFb.filterArrayBy(a, "last")
  }
  searchByPhone(ev: any): void {
    console.log(ev.target.value);
    this.dbFb.filterArrayBy(ev.target.value, "phone")
  }

}
