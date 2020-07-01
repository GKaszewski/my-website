import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    AUTH_URL : string = "https://gabrielkaszewski-api.herokuapp.com/auth/";
    constructor(private cookie : CookieService, private http : HttpClient) {}

    getToken() : string {
        return this.cookie.get('token');
    }

    setToken(token : string) {
        this.cookie.set('token', token);
    }

    isAuth() : boolean {
        if(this.getToken().length > 0) return true;
        else return false;
    }

    logout() {
        this.cookie.deleteAll();
    }
    
    login(username : string, password : string) : Observable<User> {
        return this.http.post<User>(this.AUTH_URL, {username : username, password : password});
    }
}