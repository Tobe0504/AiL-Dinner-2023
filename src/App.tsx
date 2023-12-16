import { Route, Routes } from "react-router-dom";
import LandingPage from "./Containers/LandingPage/LandingPage";
import TicketCategories from "./Containers/TicketCategories/TicketCategories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ticket-categories" element={<TicketCategories />} />
    </Routes>
  );
}

export default App;
