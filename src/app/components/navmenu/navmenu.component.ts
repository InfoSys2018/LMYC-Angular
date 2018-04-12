import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
  private authenticated: boolean;

  constructor() { }

  ngOnInit() {
  	this.refresh();
  }

  logout() {
    sessionStorage.setItem("authenticated", "false");
    sessionStorage.removeItem("acess_token");
    location.reload();
  }

  refresh() {
    if (sessionStorage.getItem("authenticated") == "true") {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }
}
