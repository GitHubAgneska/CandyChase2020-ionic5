import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { LevelI } from '../../shared/models/level.interface';


@Injectable({
    providedIn: 'root'
})
export class LevelApiService {

    public level: LevelI;
    public levelList: LevelI[];
    public levelListUrl = 'assets/levelsData.json';

    private handleError: HandleError;

    constructor(
        private httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.levelList = [];
        this.handleError = httpErrorHandler.createHandleError('LevelApiService');
    }

    getLevelList(): Observable<LevelI[]> {
        return this.httpClient
            .get(this.levelListUrl)
            .pipe(
                map(
                    (response: Response) => {
                        const rawApiResponseObject: any = response;
                        const levelsListFromApi: Array<any> = rawApiResponseObject;
                        // console.log("je suis levellist 0", result[0]);
                        return levelsListFromApi as LevelI[];
                    }
                ),
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError('getLevelList', [])) // then handle the error
            );
    }

}
