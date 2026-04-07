import Button from "../components/Button";

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl font-bold">
            Turn Your Runs Into{" "}
            <span className="text-orange-500">Competition</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
            Create custom races and rank your Strava club with powerful leaderboard rules.
        </p>

        <div className="mt-10 flex gap-4">
            <Button variant="primary">Create Race</Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Learn More
            </Button>
        </div>
    </section>
  );
};

export default LandingPage;