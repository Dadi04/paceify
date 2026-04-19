import { NavLink } from "react-router-dom";
import Button from "./Button";

const Nav = ({ login }: any | null) => {

    const handleLogin = () => {
        window.location.href = `https://www.strava.com/oauth/authorize?client_id=${import.meta.env.VITE_STRAVA_CLIENT_ID}&redirect_uri=http://localhost:5173/callback&response_type=code&scope=read`
    }

    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
            <NavLink to={"/"} className="text-2xl font-bold text-orange-500 cursor-pointer">Paceify</NavLink>

            <div className="hidden md:flex gap-8 text-sm text-gray-300">
                <NavLink to={"/features"}>Features</NavLink>
                <NavLink to={"/how"}>How it works</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>

            { login === null ? 
                <Button onClick={handleLogin} variant="outline" className="flex gap-3">Log in with Strava</Button> 
                    : 
                <img src={login.profile_medium} alt="profile" width="40px" />
            }
            
        </nav>
    );
};

export default Nav;