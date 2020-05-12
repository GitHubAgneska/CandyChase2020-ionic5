import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { Candy } from '../../shared/models/candy.model';
import { CandyI } from '../../shared/models/candy.interface';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    observe: 'response', // to display the full response
    responseType: 'json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CandyApiService {


  public candyList: CandyI[];
  public candyItem: CandyI;

  public candyListApiUrl =
    'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50';
  public candyByIdApiUrl = 'https://world.openfoodfacts.org/api/v0/product/';

  private handleError: HandleError;

  constructor(
    private httpService: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.candyItem = { _id: '', product_name: '', amountInBackpack: null };
    this.handleError = httpErrorHandler.createHandleError('CandyApiService');
  }

  /*
  => replaced by http-error-handling service

  // https://angular.io/guide/http#handling-request-errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  } */


  // GET all candy list from api, max 50 results
  // | => TO DO : clean up doublons in response list with a pipe
  public getAllCandyFromApi(): Observable<CandyI[]> {
    return this.httpService
      .get(this.candyListApiUrl)
      .pipe(
        map(
          (response: Response) => {
            // console.log(response);
            const rawApiResponseObject: any = response;
            const candyListFromApi: Array<any> = rawApiResponseObject.products;
            // '.products' => for object from api contains 2 other main fields!
            //  ( -- why is this syntax not working anymore? :
            // const candyListFromApi: Array<any> = rawApiResponse.json().products as CandyI[];

            // console.log(candyListFromApi);
            return candyListFromApi as CandyI[];
          }
        ),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getAllCandyFromApi', [])) // then handle the error
      );
  }

//   search candy by name  => TODO replace method search api with search amongst list results
  /* GET candy whose name contains search term */
 /*  searchCandy(term: string): Observable<CandyI[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.httpService.get<CandyI[]>(this.candyListApiUrl, options)
      .pipe(
        catchError(this.handleError<CandyI[]>('searchCandy', []))
      );
  } */

  // get candy by id from api
  public getCandyById(candyId: string | number): Observable<CandyI> {
    return this.httpService
      .get(this.candyByIdApiUrl + candyId + '.json')
      .pipe(
        map(
          (response: Response) => {
            const RawApiResponseCandyItem: any = response;
            const candyItemFromApi: {} = RawApiResponseCandyItem;
            console.log(candyItemFromApi);
            return candyItemFromApi as CandyI;
          }
        ),
        retry(3),
        catchError(this.handleError)
      );
  }

}

