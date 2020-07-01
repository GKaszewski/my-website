import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  username : string;
  password : string;
  sub : Subscription;
  constructor(public auth : AuthService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  login() {
    this.sub = this.auth.login(this.username, this.password).subscribe(res => {
      this.auth.setToken(res.token);
    });
  }

  logout() {
    this.auth.logout();
  }
}
