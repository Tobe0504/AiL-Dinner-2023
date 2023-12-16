import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { tickets } from "../../Utilities/tickets";
import classes from "./AccountDetails.module.css";

const AccountDetails = () => {
  // Router
  const { ticketSlug } = useParams();

  // Utils
  const activeTicket = tickets.find((data) => data.slug === ticketSlug);

  return (
    <Layout>
      <div className={classes.container}>
        <h4>Reserve your spot...or make a donation 🤲🏽</h4>
        <p>
          Embrace the spirit of generosity and secure your presence at our event
          or contribute to our cause by making a donation. Your choice to
          reserve a spot or make a donation empowers us to create memorable
          experiences and make a positive impact. Whether you join us in person
          or support us from afar, your participation fuels the success of our
          mission. Choose your path and become a valued part of our journey.
        </p>
        <p>
          Please send the amount {ticketSlug && `of ${activeTicket?.price}`} to
          the account details below:
        </p>
        <p>
          <span>Bank account name</span>: AIESEC in Lagos
        </p>
        <p>
          <span>Account Number</span>: 12345678910
        </p>
        <p>
          <span>Bank</span>: United Bank for Africa
        </p>
        <p>
          Also, please upload proof of payment to{" "}
          <a href="#0" target="_blank">
            this
          </a>{" "}
          drive so we can confirm your payment
        </p>
        <a href="#0" target="_blank">
          <Button>Upload proof of payment</Button>
        </a>
      </div>
    </Layout>
  );
};

export default AccountDetails;
