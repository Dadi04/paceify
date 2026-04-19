import type { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { StravaUser } from "../interfaces/StravaUser";

const MainLayout = ({children, login}: {children: ReactNode, login: StravaUser | null}) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Nav login={login} />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;