import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import CreateRace from "./pages/CreateRace";
import Callback from "./pages/Callback";

function App() {
  const [login, setLogin] = useState<any | null>(null);
  return (
    <Router>
      <MainLayout login={login}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-race" element={<CreateRace />} />
          <Route path="/callback" element={<Callback setLogin={setLogin} />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;