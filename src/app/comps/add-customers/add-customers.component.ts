import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  @ViewChild("f") myForm: any;
  constructor(private dbFb: DbFbService, private router: Router) { }

  ngOnInit(): void {
  }


  onSub(): any {
    if (this.myForm.form.status == "VALID") {
      let bodyForm = this.myForm.form.value;
      //we add id to be able to use it later
      bodyForm.user_id = localStorage["fb_user"];
      //make first and last names written in same case (capitalized) for finding in db
      bodyForm.first = bodyForm.first.substr(0, 1).toUpperCase() + bodyForm.first.substr(1).toLowerCase();
      bodyForm.last = bodyForm.last.substr(0, 1).toUpperCase() + bodyForm.last.substr(1).toLowerCase();
      //console.log(bodyForm);
      this.dbFb.addCustomer(bodyForm);
      alert("success")
      this.router.navigate(["/admin"])
    }
  }


}
