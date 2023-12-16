import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  // Router
  const navigate = useNavigate();
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h4>
            Welcome to the <br />
            <span>Black </span> Affair
          </h4>
          <div className={classes.buttonContainer}>
            <Button
              onClick={() => {
                navigate("/registration");
              }}
            >
              Take your first step
            </Button>
            {/* <Button
              type="secondary"
              onClick={() => {
                navigate("/ticket-categories");
              }}
            >
              See our ticket categories
            </Button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
