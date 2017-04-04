/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserService } from './../../services/user-service';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login-component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerStub;

  // beforeEach(async(() => {
  //   routerStub = {
  //     navigate: jasmine.createSpy('navigate')
  //   };
  //   TestBed.configureTestingModule({
  //     imports: [HttpModule, FormsModule],
  //     declarations: [ LoginComponent ],
  //     providers: [
  //       UserService,
  //       {
  //         provide: Http, useFactory: (backend, options) => {
  //           return new Http(backend, options);
  //         },
  //         deps: [MockBackend, BaseRequestOptions]
  //       },
  //       MockBackend,
  //       BaseRequestOptions,
  //       { provide: Router, useValue: routerStub ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
