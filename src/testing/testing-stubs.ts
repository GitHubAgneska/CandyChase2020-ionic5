import { of, Observable } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { convertToParamMap } from '@angular/router';


/* export class ActivatedRouteMock {
    public paramMap = of(convertToParamMap({
        choice: 'abc123'
    }));
} */


export class GeolocServiceStub {

    public setGeo() { }
    public getGeo() {
        return of({});
    }

    public setAgeRange(age: number) {
        age = 3;
    }
    public getAgeRange() {
        return 3;
    }

    public findAllowedDistance() { }

    public getCurrentLocation() {
        return of({});
    }

    public calculateMapBounds() { }
    public loadMapWithBounds() { }
    public loadMapWithoutBounds() { }

}



export class UserStatsServiceStub {

    // ageRange ---------------------------------------------------

    public setCurrentAgeRange(age: number) {
        age = 3;
    }
    public getCurrentAgeRange() {
        return 3;
    }


    // backpack content -------------------------------------------

    public getCurrentBackpackContent() {
        return of([{}, {}, {}]);
    }
    public update_backpackContent(itemsInBackpack) { }

    public getCurrentBackpackCount() {
        return of(5);
    }
    public update_totalCandyCount(totalCandy: number) { }



    // total points -------------------------------------------------

    public getCurrentTotalPoints() {
        const totalPoints$ = cold('--x|', { x: 15 });
        return totalPoints$;
    }
    public update_totalPoints(totalPoints: number) { }


    // level ---------------------------------------------------------
    public retrieveLevelList() {
        return of([]);
    }
    public setCurrentLevel(totalPoints: number) { }
    public getCurrentLevel() { }
    public update_level(level) { }


    // challenges ---------------------------------------------------------

    // behavior subjects tested as observables => ?
    public getCurrentTriggeredTreats() {
        return of([1, 2, 3]);
        /*       const triggeredtreatsList$ = cold('--x|', { x: [{ treatId: 1, treatDescription: 'xxxxx', hasBeenTriggered: true }] });
                return triggeredtreatsList$; */
    }
    public getCurrentTriggeredTricks() {
        return of([4, 5, 6]);
        /* const triggeredtricksList$ = cold('--x|', { x: [{ trickId: 1, trickDescription: 'yyyyy', hasBeenTriggered: true }] });
        return triggeredtricksList$; */
    }
    public getCurrentAchievedTreats() {
        return of([7, 8, 9]);
        /*         const achievedtreatsList$ = cold('--x|',
                    { x: [{ treatId: 1, treatDescription: 'xxxxx', hasBeenTriggered: true, hasBeenCompleted: true }] });
                return achievedtreatsList$; */
    }
    public getCurrentAchievedTricks() {
        return of([10, 11, 12]);
        /*         const achievedtricksList$ = cold('--x|',
                    { x: [{ trickId: 1, trickDescription: 'yyyyy', hasBeenTriggered: true, hasBeenCompleted: true }] });
                return achievedtricksList$; */
    }
    public getCompletedChallengesCount() {
        return of(5);
    }

    // saved addresses ---------------------------------------------------------
    getCurrentAddressesList() {
        return of(['a', 'b', 'c']);
    }
    updateCurrentAddressesList(addressesList) { }


}

export class LevelServiceStub {
    public getLevelList() {
        return of(['x', 'x', 'x']);
    }
}


export class ChallengesApiServiceStub {
    public getTreatsList() {
        return of([{ id: 1 }, { id: 2 }, { id: 3 }]);
        /*  const treatsList$ = cold('--x|', { x: [{ treatId: 1, treatDescription: 'xxxxx' }] });
            return treatsList$; */
    }
    public getTricksList() {
        return of([{ id: 4 }, { id: 5 }, { id: 6 }]);
        /* const tricksList$ = cold('--x|', { x: [{ trickId: 1, trickDescription: 'yyyyy' }] });
        return tricksList$; */
    }
}




export class RouterMock {
    navigateByUrl(url: string) {
        return url;
    }
    serializeUrl(url: string) {
        return url;
    }
}

export class MockBackend {


    public expectedMockRawCandyDataFromApi = of({ page_size: 50, page: 1, count: '6882',
        products: [{ _id: '1', product_name: 'testName1' },
                { _id: '2', product_name: 'testName2' },
                { _id: '3', product_name: 'testName3' }]});


    public treats = of([
        {
            treatId: 1,
            treatDescription: 'Find or pick a PINK candy in your collection and eat it ! ',
            hasBeenCompleted: false,
            bonusPoints: 3
        },
        {
            treatId: 2,
            treatDescription: 'Find or pick a CHOCOLATE candy in your collection and eat it ! ',
            hasBeenCompleted: false,
            bonusPoints: 3
        },
        {
            treatId: 3,
            treatDescription: 'Find or pick a ROUNDED candy in your collection and eat it ! ',
            hasBeenCompleted: false,
            bonusPoints: 3
        }
    ]);

    public tricks = of([
        {
            trickId: 1,
            trickDescription: 'Next house you will visit, tell the hosts a horror story involving a WEREWOLF !',
            hasBeenCompleted: false,
            bonusPoints: 5
        },
        {
            trickId: 2,
            trickDescription: 'Take a selfie with a VAMPIRE !',
            hasBeenCompleted: false,
            bonusPoints: 7
        },
        {
            trickId: 3,
            trickDescription: 'You have to give a candy to a ZOMBIE !',
            hasBeenCompleted: false,
            bonusPoints: 9
        }]);

    public levels = of([
        {
            idLevel: 1,
            levelName: '1',
            levelImg: 'assets/graphicMat/fantom.png' ,
            bannerMessage: 'assets/graphicMat/banner_text_ghost.png',
            levelCard: 'assets/graphicMat/ghost_card.png',
            levelCardName: 'ghost card'
        },
        {
            idLevel: 2,
            levelName: '2',
            levelImg: 'assets/graphicMat/color_pumpkin.png',
            bannerMessage: 'assets/graphicMat/banner_text_pumpkin.png',
            levelCard: 'assets/graphicMat/pumpkin_card.png',
            levelCardName: 'pumpkin card'
        },
        {
            idLevel: 3,
            levelName: '3',
            levelImg: 'assets/graphicMat/black_cat.png',
            bannerMessage: 'assets/graphicMat/banner_text_blackcat.png',
            levelCard: 'assets/graphicMat/blackcat_card.png',
            levelCardName: 'black-cat card'
        },
    ]);


}


