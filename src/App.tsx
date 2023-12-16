import { Route, Routes } from "react-router-dom";
import LandingPage from "./Containers/LandingPage/LandingPage";
import RegistrationForm from "./Containers/RegistrationForm/RegistrationForm";
import TicketCategories from "./Containers/TicketCategories/TicketCategories";
import TicketExplanation from "./Containers/TicketExplanation/TicketExplanation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ticket-categories" element={<TicketCategories />} />
      <Route
        path="/ticket-categories/:ticketSlug"
        element={<TicketExplanation />}
      />
      <Route path="/registration" element={<RegistrationForm />} />
    </Routes>
  );
}

export default App;
