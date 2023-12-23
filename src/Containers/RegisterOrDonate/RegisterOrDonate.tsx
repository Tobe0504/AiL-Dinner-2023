import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { scrollToTheTop } from "../../HelperFunctions/scrollToTop";
import classes from "./RegisterOrDonate.module.css";

const RegisterOrDonate = () => {
  // Router
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h4>Decide How You'd Like to Participate</h4>
          <div className={classes.buttonContainer}>
            <Button
              onClick={() => {
                navigate("/account-details");
                scrollToTheTop();
              }}
            >
              Donate
            </Button>
            <Button
              type="secondary"
              onClick={() => {
                navigate("/registration");
                scrollToTheTop();
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterOrDonate;
