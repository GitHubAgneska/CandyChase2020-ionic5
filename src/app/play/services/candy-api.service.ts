import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { CandyI } from '../../shared/models/candy.interface';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { environment } from '../../../environments/environment';

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
  public candyItem: Partial<CandyI>;

  private handleError: HandleError;
  public resultPageSize: number;

  constructor(
    private httpService: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.candyItem = { _id: '', product_name: '', amountInBackpack: null };
    this.handleError = httpErrorHandler.createHandleError('CandyApiService');
    this.resultPageSize = 300;
  }

  // GET all candy list from api (results per page can vary)
  // | => TO DO : clean up doublons in response list with a pipe
  public getAllCandyFromApi(): Observable<CandyI[]> {
    return this.httpService
      .get(`${environment.candyListApi + this.resultPageSize}`)
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

  // get candy by id from api
  public getCandyById(candyId: string | number): Observable<CandyI> {
    return this.httpService
    .get(`${environment.candyByIdApiUrl}` + candyId + '.json')
    .pipe(
      map(
        (response: Response) => {
          const RawApiResponseCandyItem: any = response;
          const candyItemFromApi: {} = RawApiResponseCandyItem.product;
          console.log(candyItemFromApi);
          return candyItemFromApi as CandyI;
        }
        ),
        retry(3),
        catchError(this.handleError)
        );
      }
    }

      // TO DO (search candy in list by name)
    /*   filterById(id: string): Observable<Product> {
        return this.getProducts()
                  .filter(products => products.find(product => id === product.id));
      }
      */
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

