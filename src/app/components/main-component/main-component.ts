import { Component, OnInit, AfterViewInit, ElementRef  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserService } from './../../services/user-service';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.html',
  styleUrls: ['./main-component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  private testName: String = 'Test Only';
  private loggedIn: Boolean = true;
  private admin: Boolean = false;

  constructor(private _elRef: ElementRef, private userService: UserService, private router: Router) { }

  ngOnInit() {
  // On component instantiation get user
    this.userService.getUser()
        .subscribe(
          res => {
            this.testName = res.name;
            this.loggedIn = false;
            this.admin = res.admin;
          },
          err => {
            console.log('Unauthorized');
          }
        );
  }

  userLogout() {
    this.userService.logout()
        .subscribe(
          res => {
            this.router.navigate(['/login']);
          },
          err => {
            console.log('Not logout', err);
          }
        );
  }

  ngAfterViewInit() {
    jQuery(this._elRef.nativeElement).find('.parallax').parallax();
    jQuery(this._elRef.nativeElement).find('.button-collapse').sideNav({closeOnClick: true});
  }

}
