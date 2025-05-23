import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomersComponent } from './comps/add-customers/add-customers.component';
import { AppAdminComponent } from './comps/app-admin/app-admin.component';
import { ContactListComponent } from './comps/contact-list/contact-list.component';
import { CustomerEditComponent } from './comps/customer-edit/customer-edit.component';
import { CustomerInfoComponent } from './comps/customer-info/customer-info.component';
import { CustomersListComponent } from './comps/customers-list/customers-list.component';
import { LeadsComponent } from './comps/leads/leads.component';
import { LoginComponent } from './comps/login/login.component';
import { ReportsComponent } from './comps/reports/reports.component';
import { SignupComponent } from './comps/signup/signup.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "admin", component: AppAdminComponent, children: [
      { path: "", component: CustomersListComponent },
      { path: "addCustomer", component: AddCustomersComponent },
      { path: "customerInfo/:id", component: CustomerInfoComponent },
      { path: "customerEdit/:id", component: CustomerEditComponent },
      { path: "contacts", component: ContactListComponent },
      { path: "leads", component: LeadsComponent },
      { path: "reports", component: ReportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
