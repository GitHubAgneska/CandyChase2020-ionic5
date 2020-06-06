import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { map, catchError, retry } from 'rxjs/operators';
import { ChallengesI, TreatI, TrickI } from '../../shared/models/challenges.interface';

@Injectable({
  providedIn: 'root'
})
export class ChallengesApiService {

  public challengesList: ChallengesI;
  public treats: TreatI[];
  public tricks: TrickI[];
  public challengesListUrl = 'assets/challengesData.json';
  private handleError: HandleError;

  constructor(
    private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.challengesList = { treats: [], tricks: [] };
    this.handleError = httpErrorHandler.createHandleError('ChallengesApiService');
  }

  public getChallengesList(): Observable<TreatI[]> {
    return this.httpClient.get(this.challengesListUrl).pipe(
      map(
        (data: Response) => {
          const rawDataFromApi: any = data;
          console.log(rawDataFromApi);
          return rawDataFromApi;
        }
      ),
      retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getChallengesList', [])) // then handle the error
    );
  }
}
