import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.css']
})
export class SideNavAdminComponent implements OnInit {
  toggle = true;

  constructor() { }

  ngOnInit(): void {
  }
  Toggle(): void {
    this.toggle = !this.toggle;
  }
}
