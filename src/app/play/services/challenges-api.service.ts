import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { map, catchError, retry } from 'rxjs/operators';
import { TrickAndTreatI } from '../../shared/models/challenges.interface';

@Injectable({
  providedIn: 'root'
})
export class ChallengesApiService {

  public treats: TrickAndTreatI;
  public tricks: TrickAndTreatI;
  public challengesList: TrickAndTreatI[];

  public challengesListUrl = 'assets/challengesData.json';
  private handleError: HandleError;

  constructor(
    private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('ChallengesApiService');
  }

  public getChallengesList(): Observable<TrickAndTreatI[]> {
    return this.httpClient
    .get(this.challengesListUrl)
    .pipe(
      map(
        (data: Response) => {
          const rawApiResponseObject: any = data;
          const challengesListFromApi: Array<any> = rawApiResponseObject;
          console.log('CHALLENGES LIST [0]==', challengesListFromApi[0]);
          return challengesListFromApi as TrickAndTreatI[];
        }),

      retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getChallengesList', [])) // then handle the error
    );
  }
}
