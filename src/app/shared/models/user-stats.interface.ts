import { LevelI } from './level.interface';

export interface UserStatsI {

    totalCandy: number;
    totalPoints: number;
    currentLevel: LevelI;
    collectedCards: any[];
    savedAddresses: any[];
    challenges: number;

}
