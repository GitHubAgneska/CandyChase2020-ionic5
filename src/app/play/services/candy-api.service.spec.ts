import 'zone.js/dist/zone-testing';
import { fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { CandyApiService } from './candy-api.service';
import { CandyI } from '../../shared/models/candy.interface';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const testUrl = '/data';
describe( 'CandyApiService', () => {

  let httpClient: HttpClient;
  let httpErrorhandler: HttpErrorHandler;
  let httpTestingController: HttpTestingController;

  const candyApiTestUrl =
  'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=3';

  beforeEach( async () => {

    // let candyApiServiceSpy: jasmine.SpyObj<CandyApiService>;
    // let httpClientSpy: { get: jasmine.Spy };
    // let httpErrorHandlerSpy: { get: jasmine.Spy};
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // httpErrorHandlerSpy = jasmine.createSpyObj('HttpErrorHandler', ['get']);
    // const spy = jasmine.createSpyObj('CandyApiService', ['getValue']);
    // candyApiService = new CandyApiService(httpClientSpy as any, httpErrorHandlerSpy as any);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        // CandyApiService, { provide: CandyApiService, useValue: spy },
        MessageService, HttpClient, HttpErrorHandler ]
    });

    httpClient = TestBed.get(HttpClient);
    httpErrorhandler = TestBed.get(HttpErrorHandler);
    httpTestingController = TestBed.get(HttpTestingController);
    // candyApiServiceSpy = TestBed.get(CandyApiService) as jasmine.SpyObj<CandyApiService>;
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // candyApiService = new CandyApiService(httpClientSpy as any, httpErrorHandlerSpy as any);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: CandyApiService = TestBed.get(CandyApiService);
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {

    const testData: CandyI[] =  [{ _id: '1', product_name: 'testName1' },
              { _id: '2', product_name: 'testName2' },
              { _id: '3', product_name: 'testName3' }];

    httpClient.get<CandyI[]>(testUrl).subscribe((data) => {
      expect(data).toBeDefined();
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('/data');
    req.flush(testData);
    httpTestingController.verify();
    });

  it('can test for network error', () => {
    const emsg = 'simulated network error';

    httpClient.get<CandyI[]>(testUrl).subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );
    const req = httpTestingController.expectOne(testUrl);
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });
    // Respond with mock error
    req.error(mockError);
  });

});

