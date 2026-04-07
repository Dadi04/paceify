import Button from "./Button";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
            <div className="text-2xl font-bold text-orange-500 cursor-pointer">Paceify</div>

            <div className="hidden md:flex gap-8 text-sm text-gray-300">
                <a href="#features">Features</a>
                <a href="#how">How it works</a>
                <a href="#about">About</a>
            </div>

            <div className="flex gap-3">
                <Button variant="outline">Log in</Button>
            </div>
        </nav>
    );
};

export default Nav;