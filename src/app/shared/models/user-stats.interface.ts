import { LevelI } from './level.interface';
import { Observable } from 'rxjs';

export interface UserStatsI {

    userAgeRange: number;
    totalCandy: Observable<number>;
    totalPoints: number;
    currentLevel: LevelI;
    collectedCards?: any[];
    savedAddresses?: any[];
    challenges?: number;

}
