export interface ChallengesI {

    treat: TrickI;
    trick: TreatI;

}

export interface TrickI {

    trickId: number;
    challengeDescription: string;
    bonusPoints: number;

}

export interface TreatI {

    treatId: number;
    challengeDescription: string;
    bonusPoints: number;
}
