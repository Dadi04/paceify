import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import type { Race } from "../interfaces/Race";

const CreateRace = () => {
    const [raceName, setRaceName] = useState<string>("");
    const [raceDescription, setRaceDescription] = useState<string | undefined>("");
    const [raceType, setRaceType] = useState<"Running" | "Cycling">("Running")
    const [raceVisibility, setRaceVisibility] = useState<"Private" | "Public">("Private")
    const [raceCoverImage, setRaceCoverImage] = useState<string | undefined>("");
    const [raceParticipantsNum, setRaceParticipantsNum] = useState<number>(-1);
    const [raceTeamsNum, setRaceTeamsNum] = useState<number>(-1);
    const [raceStartDate, setRaceStartDate] = useState<Date>(new Date());
    const [raceEndDate, setRaceEndDate] = useState<Date | undefined>();
    const [raceScoringType, setRaceScoringType] = useState<string>("Total distance");

    // localStorage implementation TODO
    
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const race:Race = {
            name: raceName,
            description: raceDescription,
            raceType: raceType,
            raceVisibility: raceVisibility,
            coverImage: raceCoverImage,
            participants: raceParticipantsNum,
            teams: raceTeamsNum,
            startDate: raceStartDate,
            endDate: raceEndDate,
            scoringType: raceScoringType
        }

        fetch("/api/create-race/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(race),
        })
        .then((response) => response.json())
        .then((data) => {
            setRaceName("");
            setRaceDescription("");
            setRaceType("Running");
            setRaceVisibility("Private");
            setRaceCoverImage("");
            setRaceParticipantsNum(-1);
            setRaceTeamsNum(-1);
            setRaceStartDate(new Date());
            setRaceEndDate(undefined);
            setRaceScoringType("");
            navigate(`/race/${data.race.id}`)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <form onSubmit={handleSubmit} action="post">
            <section className="flex flex-col items-center justify-center text-center px-6 py-12 gap-y-7">
                <div>
                    <h1 className="text-3xl font-semibold text-white">
                        Create a New Race
                    </h1>
                    <p className="text-neutral-400 text-sm">
                        Set up your challenge and invite participants
                    </p>
                </div>
                <div>
                    <Button type="button" variant="outline" className={`mr-2 ${raceType === "Running" ? "bg-neutral-800 text-black" : ""}`} onClick={() => setRaceType("Running")}>Running</Button>
                    <Button type="button" variant="outline" className={`ml-2 ${raceType === "Cycling" ? "bg-neutral-800 text-black" : ""}`} onClick={() => setRaceType("Cycling")}>Cycling</Button>
                </div>
                <Input type="text" required text="Name" necessary={true} variant="text" onChange={(event) => setRaceName(event.target.value)}></Input>
                <div>
                    <Button type="button" variant="outline" className={`mr-2 ${raceVisibility === "Private" ? "bg-neutral-800 text-black" : ""}`} onClick={() => setRaceVisibility("Private")}>Private</Button>
                    <Button type="button" variant="outline" className={`ml-2 ${raceVisibility === "Public" ? "bg-neutral-800 text-black" : ""}`} onClick={() => setRaceVisibility("Public")}>Public</Button>
                </div>
                <Input type="text" text="Description" necessary={false} variant="text" onChange={(event) => setRaceDescription(event.target.value)}></Input>
                <Input type="file" text="Cover image" necessary={false} variant="file" onChange={(event) => setRaceCoverImage(event.target.value)}></Input>
                <div className="flex w-[50%] justify-around">
                    <Input type="number" required text="Number of participants" min={2} necessary={true} variant="number" onChange={(event) => setRaceParticipantsNum(event.target.value as unknown as number)}></Input>
                    <Input type="number" required text="Number of teams" min={1} necessary={true} variant="number" onChange={(event) => setRaceTeamsNum(event.target.value as unknown as number)}></Input>
                </div>
                <div className="flex w-[50%] justify-around">
                    <Input type="date" required text="Start date" necessary={true} variant="date" onChange={(event) => setRaceStartDate(event.target.value as unknown as Date)}></Input>
                    <Input type="date" text="End date" necessary={false} variant="date" onChange={(event) => setRaceEndDate(event.target.value as unknown as Date)}></Input>
                </div>
                <Select text="Scoring type" necessary={true} options={[
                    { label: "Total distance", value: "total-distance" },
                    { label: "Total time", value: "total-time" },
                    { label: "Average pace", value: "average-pace" },
                    { label: "Activity number", value: "activity-number" },
                ]} onChange={(event) => setRaceScoringType(event.target.value)}></Select>
                <Button type="submit">Create race</Button>
            </section>
        </form>
    );
};

export default CreateRace;