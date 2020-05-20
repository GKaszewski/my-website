import { Component, } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router : Router) {}

  goToPageRouter(name : string) {
    this.router.navigateByUrl(name);
  }

  goToPage(url : string) {
    window.open(url);
  }
}
