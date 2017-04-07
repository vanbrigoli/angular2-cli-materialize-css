import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './../models/User';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  authenticate(username, password) {
    let body = {
      "username" : username,
      "password" : password
    };
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/authenticate', body, options)
      .map(res => {
        return res.json().status;
      })
      .catch(this.handleError);
  }

  getUser() {
    let name;
    let rights;
    let email;
    return this.http.get('/getUser')
      .map(res => {
        if(res.json().user.facebook){ 
          name = res.json().user.facebook.name;
          email = res.json().user.facebook.email;
          rights = false;
        }else {
          name = res.json().user.local.username;
          email = res.json().user.local.email;
          rights = res.json().user.local.admin;
        }
        return new User(name, email, rights);
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.get('/logout')
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
    return Observable.throw(errMsg);
  }

}
