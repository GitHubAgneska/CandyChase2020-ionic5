
import { TrickAndTreatI, TrickI, TreatI } from '../models/challenges.interface';

export class TrickAndTreat implements TrickAndTreatI {

    challengeId = 0;
    challengeType = '';
    challengeDescription = '';
    bonusPoints = 0;
    hasBeenTriggered = false;
    hasBeenCompleted = false;
}
export class  Trick implements TrickI {

    trickId = 0;
    trickDescription = '';
    bonusPoints = 0;
    hasBeenTriggered = false;
    hasBeenCompleted = false;

}
export class Treat implements TreatI {

    treatId = 0;
    treatDescription = '';
    bonusPoints = 0;
    hasBeenTriggered = false;
    hasBeenCompleted = false;

}
