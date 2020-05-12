import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { MessageService } from './message.service';
import { LevelApiService } from './level-api.service';
import { LevelI } from '../../shared/models/level.interface';


describe('LevelApiService', () => {

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let levelApiService: LevelApiService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LevelApiService, HttpErrorHandler, MessageService]
        });
        // Inject the http service and test controller for each test
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        levelApiService = TestBed.get(LevelApiService);
    });
    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });
    it('should be created', () => {
        const service: LevelApiService = TestBed.get(LevelApiService);
        expect(service).toBeTruthy();
    });

    // ------------ Service methods tests : #getLevelList
    describe('#getLevelList', () => {
        let expectedLevels: LevelI[];

        beforeEach(() => {
            levelApiService = TestBed.get(LevelApiService);
            expectedLevels = [
                {   idLevel: 1,
                    levelName: 'level1',
                    // totalPoints: number;
                    levelImg: 'somepic.png',
                    bannerMessage: 'stringBanner1',
                    levelCard: 'card1',
                    levelCardName: 'card1Name'
                },
                {   idLevel: 2,
                    levelName: 'level2',
                    // totalPoints: number;
                    levelImg: 'somepic2.png',
                    bannerMessage: 'stringBanner2',
                    levelCard: 'card2',
                    levelCardName: 'card2Name'
                }
            ] as LevelI[];
        });

        // -----------------------------------------------------------------------

    });


});
