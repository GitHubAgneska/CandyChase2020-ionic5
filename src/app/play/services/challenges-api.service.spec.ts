import { TestBed, inject } from '@angular/core/testing';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { MockBackend } from '../../../testing/testing-stubs';
import { ChallengesApiService } from './challenges-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TreatI } from '../../shared/models/challenges.interface';

const testUrl = '/data';

describe('ChallengesApiService', () => {

  let service: ChallengesApiService;
  let httpClient: HttpClient;
  let backend: MockBackend;
  let mockData: MockBackend;
  let httpErrorhandler: HttpErrorHandler;


  beforeEach( async () => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ ChallengesApiService, MockBackend, HttpClient, HttpErrorHandler,  MessageService ]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    backend = TestBed.get(MockBackend);
    httpErrorhandler = TestBed.get(HttpErrorHandler);
    service = TestBed.get(ChallengesApiService);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
      service = TestBed.get(ChallengesApiService);
      expect(service).toBeTruthy();
    });

/*   it('expects service to fetch data', inject([HttpTestingController, ChallengesApiService],
    (httpMock: HttpTestingController) => {
      httpClient.get<TreatI[]>('/MockBackend').subscribe(data => {
        expect(data.length).toBe(3);
      });
      const req = httpMock.expectOne('/MockBackend');
      expect(req.request.method).toEqual('GET');
      req.flush({data: MockBackend});
    })); */
});
