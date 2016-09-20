import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import {
    Headers,
    RequestOptions,
    RequestMethod,
    Request
} from '@angular/http';

import {
    Observable
} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    //private loginUrl: string = 'http://192.168.200.123:8000/authentication/login/';
    private loginUrl: string = 'http://127.0.0.1:8001/authentication/login/';
    private auth;

    getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    }

    doLogin(queryparameters:string): Observable < Object > {
        let _body = queryparameters;
        return this.http.get(this.loginUrl+_body).map(this.extractData).catch(this.handleError)
    }

    logout(key: string = '') {
        localStorage.removeItem(key === '' ? 'usuario' : key)
    }

    getJsonSession(key: string = '') {
        return JSON.parse(localStorage.getItem(key === '' ? 'usuario' : key))
    }

    isValidSession(key: string = ''): boolean {
        let sesion = localStorage.getItem(key === '' ? 'usuario' : key)
        return sesion == null ? false : true
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}