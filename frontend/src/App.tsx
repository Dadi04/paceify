import LandingPage from "./pages/LandingPage";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;