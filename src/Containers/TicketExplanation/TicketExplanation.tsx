import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { tickets } from "../../Utilities/tickets";
import classes from "./TicketExplanation.module.css";

const TicketExplanation = () => {
  // Router
  const { ticketSlug } = useParams();
  const navigate = useNavigate();

  // Utils
  const activeTicket = tickets.find((data) => data.slug === ticketSlug);
  return (
    <Layout>
      <div className={classes.container}>
        {/* <div className={classes.imageSection}>
        </div> */}
        <div className={classes.textSection}>
          <h4>"{activeTicket?.description}"</h4>
          {activeTicket?.explanation.slice(0, 1).map((data, i) => {
            return <p key={i}>{data}</p>;
          })}
          <div className={classes.imageSection}>
            {activeTicket?.images?.map((data, i) => {
              return <img src={data} alt="Dinner " key={i} />;
            })}
          </div>
          {activeTicket?.explanation.slice(1).map((data, i) => {
            return <p key={i}>{data}</p>;
          })}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            onClick={() => {
              navigate("/account-details");
            }}
          >
            Reserve a {activeTicket?.subCategory.toLowerCase()} ticket spot
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default TicketExplanation;
