import { Route, Routes } from "react-router-dom";
import AccountDetails from "./Containers/AccountDetails/AccountDetails";
// import ErrorPage from "./Containers/ErrorPage/ErrorPage";
import LandingPage from "./Containers/LandingPage/LandingPage";
import RegisterOrDonate from "./Containers/RegisterOrDonate/RegisterOrDonate";
import RegistrationForm from "./Containers/RegistrationForm/RegistrationForm";
import TicketCategories from "./Containers/TicketCategories/TicketCategories";
import TicketExplanation from "./Containers/TicketExplanation/TicketExplanation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}

      <Route path="/register-or-donate" element={<RegisterOrDonate />} />

      <Route path="/ticket-categories" element={<TicketCategories />} />
      <Route
        path="/ticket-categories/:ticketSlug"
        element={<TicketExplanation />}
      />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/account-details" element={<AccountDetails />} />
      <Route path="/account-details/:ticketSlug" element={<AccountDetails />} />
    </Routes>
  );
}

export default App;
