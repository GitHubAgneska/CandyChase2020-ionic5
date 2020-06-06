export interface ChallengesI {

    treats: TreatI[];
    tricks: TrickI[];
}

export interface TrickI {

    trickId?: number;
    challengeDescription: string;
    hasBeenCompleted: boolean;
    bonusPoints: number;

}

export interface TreatI {

    treatId?: number;
    challengeDescription: string;
    hasBeenCompleted: boolean;
    bonusPoints: number;
}
