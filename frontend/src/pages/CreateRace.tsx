import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

const CreateRace = () => {


    return (
        <form action="post">
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
                    <Button variant="outline" className="mr-2">Running</Button>
                    <Button variant="outline" className="ml-2">Cycling</Button>
                </div>
                <Input type="text" required text="Name" necessary={true} variant="text"></Input>
                <div>
                    <Button variant="outline" className="mr-2">Private</Button>
                    <Button variant="outline" className="ml-2">Public</Button>
                </div>
                <Input type="text" text="Description" necessary={false} variant="text"></Input>
                <Input type="file" text="Cover image" necessary={false} variant="file"></Input>
                <div className="flex w-[50%] justify-around">
                    <Input type="number" required text="Number of participants" min={2} necessary={true} variant="number"></Input>
                    <Input type="number" required text="Number of teams" min={1} necessary={true} variant="number"></Input>
                </div>
                <div className="flex w-[50%] justify-around">
                    <Input type="date" required text="Start date" necessary={true} variant="date"></Input>
                    <Input type="date" text="End date" necessary={false} variant="date"></Input>
                </div>
                <Select text="Scoring type" necessary={true} options={[
                    { label: "Total distance", value: "total-distance" },
                    { label: "Total time", value: "total-time" },
                    { label: "Average pace", value: "average-pace" },
                    { label: "Activity number", value: "activity-number" },
                ]} ></Select>
                <Button type="submit">Create race</Button>
            </section>
        </form>
    );
};

export default CreateRace;