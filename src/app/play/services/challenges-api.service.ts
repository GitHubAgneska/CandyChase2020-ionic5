import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { map, catchError, retry } from 'rxjs/operators';
import { ChallengesI } from '../../shared/models/challenges.interface';

@Injectable({
  providedIn: 'root'
})
export class ChallengesApiService {


  public challengesList: ChallengesI[];
  public challengesListUrl = 'assets/challengesData.json';
  private handleError: HandleError;


  constructor(
    private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.challengesList = [];
    this.handleError = httpErrorHandler.createHandleError('ChallengesApiService');
  }

  getChallengesList(): Observable<ChallengesI[]> {
    return this.httpClient
        .get(this.challengesListUrl)
        .pipe(
            map(
                (response: Response) => {
                    const rawApiResponseObject: any = response;
                    const challengesListUrl: Array<any> = rawApiResponseObject;
                    // console.log("je suis levellist 0", result[0]);
                    return challengesListUrl as ChallengesI[];
                }
            ),
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError('getChallengesList', [])) // then handle the error
        );
}
}
