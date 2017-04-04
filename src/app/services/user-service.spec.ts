// /* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// import { UserService } from './user-service';
// import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';

// describe('UserService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpModule],
//       providers: [
//         UserService, 
//         {
//           provide: Http,
//           useFactory: (mockBackend, options) => {
//             return new Http(mockBackend, options);
//           },
//           deps: [MockBackend, BaseRequestOptions]
//         },
//         MockBackend,
//         BaseRequestOptions
//       ]
//     });
//   });

//   it('should to be true', inject([UserService], (service: UserService) => {
//     expect(service).toBeTruthy();
//   }));
// });
