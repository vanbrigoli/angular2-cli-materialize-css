import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UserService } from './../../services/user-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
  private unauthorized: Boolean = true;
  private username: String;
  private password: String;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.authenticate(this.username, this.password)
                .subscribe(
                  res => {
                    this.unauthorized = true;
                    this.router.navigate(['/']);
                  },
                  err => {
                    this.unauthorized = false;
                  }
                );
  }

}
