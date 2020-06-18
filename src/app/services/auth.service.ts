import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
    
    constructor(private cookie : CookieService) {}

    getToken() : string {
        return this.cookie.get('token');
    }

    isAuth() : boolean {
        if(this.getToken() != null || this.getToken().length >0 ) return true;
        else return false;
    }

    logout() {
        this.cookie.deleteAll();
    } 
}