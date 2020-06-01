import { LevelI } from './level.interface';

export interface UserStatsI {

    userAgeRange: number;
    totalCandy: number;
    totalPoints: number;
    currentLevel: LevelI;
    collectedCards: any[];
    savedAddresses: any[];
    challenges: number;

}
