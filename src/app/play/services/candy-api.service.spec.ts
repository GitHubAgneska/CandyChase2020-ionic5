import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { MessageService } from './message.service';
import { CandyApiService } from './candy-api.service';
import { CandyI } from '../../shared/models/candy.interface';

// TESTING USING HTTPCLIENT SPY

describe( 'CandyApiService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let httpErrorHandlerSpy: { get: jasmine.Spy};
  let candyApiService: CandyApiService;

  beforeEach(() => {

    // TODO: spy on other methods too

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    candyApiService = new CandyApiService(httpClientSpy as any, httpErrorHandlerSpy as any);

  });

/*   it('should return expected candylist', () => {

    const expectedRawDataFromApi = { page_size: 50, page: 1, count: '6882', products: [{ _id: '1', product_name: 'testName1' },
    { _id: '2', product_name: 'testName2' },
    { _id: '3', product_name: 'testName3' }]};

    const  expectedCandy: CandyI[] = expectedRawDataFromApi.products;

    httpClientSpy.get.and.returnValue(of(expectedRawDataFromApi));

    // TO COMPLETE
    candyApiService.getAllCandyFromApi().subscribe((data) => {
      expect(data).toBeDefined();
      expect(data).toEqual(expectedRawDataFromApi)

    });

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  }); */


});









/*  TESTING USING HTTPTESTINGCONTROLLER

  describe('CandyApiService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let candyApiService: CandyApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CandyApiService, HttpErrorHandler, MessageService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    candyApiService = TestBed.get(CandyApiService);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  it('should be created', () => {
    const service: CandyApiService = TestBed.get(CandyApiService);
    expect(service).toBeTruthy();
  });

  // ------------ Service methods tests : #getAllCandyFromApi
  describe('#getAllCandyFromApi', () => {
    let expectedCandy: CandyI[];

    beforeEach(() => {
      candyApiService = TestBed.get(CandyApiService);
      expectedCandy = [
          { _id: '1', product_name: 'testName1' },
          { _id: '2', product_name: 'testName2' },
          { _id: '3', product_name: 'testName3' }
        ] as CandyI[];
    });

    // -----------------------------------------------------------------------
    it('should return expected candylist', () => {

      candyApiService.getAllCandyFromApi().subscribe(
        data => expect(data).toEqual(expectedCandy, 'should return expected candy'), fail);
      // request should match the request's URL
      const req1 = httpTestingController.expectOne(candyApiService.candyListApiUrl);
      // Assert that the request is a GET.
      expect(req1.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req1.flush(expectedCandy);
    });


    // -----------------------------------------------------------------------
    it('should be OK returning no candy', () => {
      candyApiService.getAllCandyFromApi().subscribe(
        data => expect(data.length).toEqual(0, 'should have empty candy array'), fail);
    });
    const req3 = httpTestingController.expectOne(candyApiService.candyListApiUrl);
    req3.flush([]);


    // -----------------------------------------------------------------------
    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty candy array result', () => {
      candyApiService.getAllCandyFromApi().subscribe(
        data => expect(data.length).toEqual(0, 'should return empty heroes array'),
        fail
      );
      const req5 = httpTestingController.expectOne(candyApiService.candyListApiUrl);
      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req5.flush(msg, { status: 404, statusText: 'Not Found' });
    });


    // -----------------------------------------------------------------------
    it('should return expected candy (called multiple times to same url)', () => {

      candyApiService.getAllCandyFromApi().subscribe();
      candyApiService.getAllCandyFromApi().subscribe();
      candyApiService.getAllCandyFromApi().subscribe(
        data => expect(data).toEqual(expectedCandy, 'should return expected candy'),
        fail
      );
      const requests = httpTestingController.match(candyApiService.candyListApiUrl);
      expect(requests.length).toEqual(3, 'calls to getAllCandyFromApi()');
      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([{ id: 1, name: 'bob' }]);
      requests[2].flush(expectedCandy);
    });
  });
  // ------------ ( end of #getAllCandyFromApi method testing )


  // ---------- Service methods tests : #GetCandyById method
  describe('#GetCandyById', () => {
    let expectedCandyItem: CandyI;

    beforeEach(() => {
      candyApiService = TestBed.get(CandyApiService);
      expectedCandyItem =  { _id: '1', product_name: 'testName1' } as CandyI;
    });

    // Expecting the query form of URL so should not 404 when id not found
    // const makeUrl = (id: number) => `${candyApiService.candyByIdApiUrl}/?id=${id}`;

    // -----------------------------------------------------------------------
    it('should return candy with expected id as an observable CandyItem', () => {

        candyApiService.getCandyById(expectedCandyItem._id)
          .subscribe(data =>
            // When observable resolves, result should match test data
            expect(data).toEqual(expectedCandyItem)
          );
        // request should match the request's URL
        const req = httpTestingController.expectOne(candyApiService.candyByIdApiUrl + expectedCandyItem._id);
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(expectedCandyItem);
        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
      });

      // -----------------------------------------------------------------------


  });


});
 */
