import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CandyApiService } from './candy-api.service';
import { CandyI } from '../../shared/models/candy.interface';
import { Candy } from 'src/app/shared/models/candy.model';

describe('CandyApiService testing', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let  candyApiService: CandyApiService;
  const candyApiTestUrl =
    'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=3';

  beforeEach(() =>  { 
    TestBed.configureTestingModule({
      providers: [ CandyApiService ],
      imports: [ HttpClientTestingModule ]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    candyApiService = TestBed.get(CandyApiService);
  });


  it('should be created', () => {
    const service: CandyApiService = TestBed.get(CandyApiService);
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const mockData: CandyI[] = [
      { _id: '1', product_name: 'testName1' },
      { _id: '2', product_name: 'testName2' },
      { _id: '3', product_name: 'testName3' }
    ];

    httpClient.get<CandyI[]>(candyApiTestUrl)
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(mockData)
    );
    // request should match the request's URL
    const req = httpTestingController.expectOne(candyApiTestUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(mockData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
});



  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

});
