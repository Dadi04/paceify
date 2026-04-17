export interface Race {
    // id: number;
    name: string;
    description?: string;
    raceType: "Running" | "Cycling";
    raceVisibility: "Private" | "Public";
    coverImage?: string; // use correct type TODO
    participants: number;
    teams: number;
    startDate: Date; // use time with date TODO
    endDate?: Date; // use time with date TODO
    scoringType: string;
}