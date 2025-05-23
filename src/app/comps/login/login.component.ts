import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("f") myForm: any;
  constructor(private authSer: AuthFbService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSub() {
    if (this.myForm.form.status == "VALID") {
      // success
      let formData = this.myForm.form.value;
      try {
        let data = await this.authSer.logInFb(formData.email, formData.password);
        // success log in
        if (data.user) {
          localStorage.setItem("fb_user", data.user.uid);
          // TODO : redirect to admin
          this.router.navigate(["/admin"])
        }
        console.log(data);
      }
      catch (err) {
        // if there is an error
        if (err.code) {
          alert("Try again user or password worng")
        }
        console.log(err);
      }
      console.log(this.myForm.form.value);
    }
  }

}
