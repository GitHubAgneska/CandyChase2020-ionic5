import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { map, catchError, retry } from 'rxjs/operators';
import { TrickAndTreatI, TrickI, TreatI  } from '../../shared/models/challenges.interface';

@Injectable({
  providedIn: 'root'
})
export class ChallengesApiService {

  public treats: TreatI[];
  public tricks: TrickI[];
  public challengesList: TrickAndTreatI[];

  public tricksListUrl = 'assets/tricksData.json';
  public treatsListUrl = 'assets/treatsData.json';

  private handleError: HandleError;

  constructor(
    private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('ChallengesApiService');
  }


  public getTricksList(): Observable<TrickI[]> {
    return this.httpClient
      .get<TrickI[]>(this.tricksListUrl);
  }
/*
  public getTricksList(): Observable<TrickI[]> {
    return this.httpClient
      .get(this.tricksListUrl)
      .pipe(
        map(
          (data: Response) => {
            const rawApiResponseObject: any = data;
            const TricksListFromApi: Array<TrickI> = rawApiResponseObject;
            console.log('TricksListFromApi ==', TricksListFromApi); // (3) [{…}, {…}, {…}]
            return TricksListFromApi as TrickI[];
          }),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getChallengesList', [])) // then handle the error
      );
  } */

  public getTreatsList(): Observable<TreatI[]> {
    return this.httpClient
      .get<TreatI[]>(this.treatsListUrl);
  }
/*   public getTreatsList(): Observable<TreatI[]> {
    return this.httpClient
      .get(this.treatsListUrl)
      .pipe(
        map(
          (data: Response) => {
            const rawApiResponseObject: any = data;
            const TreatsListFromApi: Array<TreatI> = rawApiResponseObject;
            console.log('TreatsListFromApi ==', TreatsListFromApi); // (3) [{…}, {…}, {…}]
            return TreatsListFromApi as TreatI[];
          }),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getChallengesList', [])) // then handle the error
      );
  } */

}

