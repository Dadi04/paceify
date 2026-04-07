import type { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Nav />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;