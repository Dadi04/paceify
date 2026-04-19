import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import CreateRace from "./pages/CreateRace";
import Callback from "./pages/Callback";
import type { StravaUser } from "./interfaces/StravaUser";

function App() {
  const [login, setLogin] = useState<StravaUser | null>(() => {
    const stored = localStorage.getItem("login");
    return stored ? JSON.parse(stored) : null;
  });

  const handleSetLogin = (data: StravaUser) => {
    localStorage.setItem("login", JSON.stringify(data));
    setLogin(data);
  };

  return (
    <Router>
      <MainLayout login={login}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-race" element={<CreateRace />} />
          <Route path="/callback" element={<Callback setLogin={handleSetLogin} />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;