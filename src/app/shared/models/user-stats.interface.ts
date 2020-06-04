import { LevelI } from './level.interface';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserStatsI {

    // userAgeRange?: number;
/*     totalCandy: number;
    totalPoints: number;
    currentLevel: LevelI; */
    totalCandy: Observable<number>;
    totalPoints: Observable<number>;
    currentLevel: Observable<LevelI>;
/*     totalCandy: BehaviorSubject<number>;
    totalPoints: BehaviorSubject<number>;
    currentLevel: BehaviorSubject<LevelI>; */
    collectedCards?: any[];
    savedAddresses?: any[];
    challenges?: number;

}
