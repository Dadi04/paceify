export interface Race {
    // id: number;
    name: string;
    description?: string;
    raceType: "Running" | "Cycling";
    raceVisibility: "Private" | "Public";
    coverImage?: string;
    participants: number;
    teams: number;
    startDate: Date;
    endDate?: Date;
    scoringType: string;
}