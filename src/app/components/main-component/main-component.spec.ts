/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';
import { UserService } from './../../services/user-service';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing'

import { MainComponent } from './main-component';

xdescribe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let mockElementRef;

  beforeEach(async(() => {
    mockElementRef = {
      nativeElement: jasmine.createSpy('nativeElement')
    };
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [
        UserService,
        {
          provide: ElementRef, useClass: mockElementRef
        },
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
