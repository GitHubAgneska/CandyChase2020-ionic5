import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { Candy } from '../../models/candy.model';
import { CandyI } from '../../models/candy.interface';

@Injectable({
  providedIn: 'root'
})
export class CandyApiService {

  constructor(
    private httpService: HttpClient) {
      this.candyItem = { _id: '', product_name: '', amountInBackpack: null };
  }

  public candyList: CandyI[];
  public candyItem: CandyI;
  public allCandyListApiUrl =
  'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50';
  public candyByIdUrl = 'https://world.openfoodfacts.org/api/v0/product/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      observe: 'response', // to display the full response
      responseType: 'json'
    })
  };


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
  }


  // get all candy list from api, max 50 results  | => TO DO : clean up doublons in list
  public getAllCandyFromApi(): Observable<CandyI[]> {
    return this.httpService
      .get(this.allCandyListApiUrl, this.httpOptions)
      .pipe(
        map(
          (response: Response) => {
            // console.log(response);
            const rawApiResponseObject: any = response;
            const candyListFromApi: Array<any> = rawApiResponseObject.products;
            // const candyListFromApi: Array<any> = rawApiResponse.json().products as CandyI[];
            // '.products' => for object from api contains 2 other main fields!

            // console.log(candyListFromApi);
            return candyListFromApi as CandyI[];
          }
        ),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  // get candy by id from api
 /*  public getCandyById(candyId: string | number): Observable<Candy> {
    return this.httpService.get( this.candyByIdUrl + candyId + '.json').pipe(
      map(
        (response: Response) => {
          const result: Candy = response.json().product as Candy;
          console.log(result);
          return result;
        }
      ),
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  } */

}

