import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UserService } from './../../services/user-service';
declare var jQuery: any;

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
  private authorized: Boolean = true;
  private username: String;
  private password: String;
  
  constructor(private userService: UserService, private router: Router, private _elRef: ElementRef) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.authenticate(this.username, this.password)
                .subscribe(
                  res => {
                    this.authorized = true;
                    this.router.navigate(['/']);
                  },
                  err => {
                    this.authorized = false;
                  }
                );
  }

  clear() {
    // this.username = null;
    // this.password = null;
  }

  hideMessage() {
    this.authorized = true;
  }

  showMessage() {
    return this.authorized ? "hidden" : "";
  }
}
