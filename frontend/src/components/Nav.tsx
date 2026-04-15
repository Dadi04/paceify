import { NavLink } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
            <NavLink to={"/"} className="text-2xl font-bold text-orange-500 cursor-pointer">Paceify</NavLink>

            <div className="hidden md:flex gap-8 text-sm text-gray-300">
                <NavLink to={"/features"}>Features</NavLink>
                <NavLink to={"/how"}>How it works</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>

            <NavLink to={"/login"} className="flex gap-3">
                <Button variant="outline">Log in</Button>
            </NavLink>
        </nav>
    );
};

export default Nav;