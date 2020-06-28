
export interface TrickAndTreatI {

    challengeId: number;
    challengeType: string;
    challengeDescription: string;
    hasBeenCompleted: boolean;
    bonusPoints: number;

}
export interface TrickI {

    trickId: number;
    trickDescription: string;
    bonusPoints: number;
    hasBeenTriggered: boolean;
    hasBeenCompleted: boolean;

}
export interface TreatI {

    treatId: number;
    treatDescription: string;
    bonusPoints: number;
    hasBeenTriggered: boolean;
    hasBeenCompleted: boolean;

}

