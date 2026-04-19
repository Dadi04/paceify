import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Callback = ({ setLogin }: any) => {
    const navigate = useNavigate();
    const called = useRef(false);

    useEffect(() => {
        if (called.current) return;
        called.current = true;

        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) return;

        fetch("/api/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({code})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.athlete)
            setLogin(data.athlete)
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return <div className="text-center pt-20">Logging you in...</div>
};

export default Callback;