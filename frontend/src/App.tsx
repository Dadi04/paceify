import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import CreateRace from "./pages/CreateRace";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-race" element={<CreateRace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;