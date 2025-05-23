import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFbService } from 'src/app/services/auth-fb.service';
import { DbFbService } from 'src/app/services/db-fb.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any
  constructor(private authFb: AuthFbService, private router: Router, private dbFire: DbFbService) { }
  ngOnInit(): void {
  }

  async onSub() {
    console.log(this.myForm.form.value);
    let user = this.myForm.form.value;
    let result = await this.authFb.singUpNewUser(user);
    console.log(result);
    // result.user -> success
    // result.code -> problem
    //add new record in db of firebase
    if (result.user) {
      alert("Signed up successfull! Now log in");
      this.dbFire.addUser(user);
      this.router.navigate(['/']);
      setTimeout(() => { window.location.reload(); }, 400)
    }
    if (result.code) {
      alert(result.message);
    }

    return result;
  }


}
