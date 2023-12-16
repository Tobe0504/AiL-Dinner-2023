import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import TextArea from "../../Components/TextArea/TextArea";
import { tickets } from "../../Utilities/tickets";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <h4>Secure Your Spot</h4>
        <p>
          Complete the form below to reserve your tickets and be part of the
          AIESEC on Lagos experience. Your journey into elegance awaits!
        </p>

        <form>
          <Input label="Name" placeholder="Tell us your name" isRequired />
          <Input
            label="Email"
            placeholder="Tell us your name"
            type="email"
            isRequired
          />
          <DropdownWithSearch
            label="Ticket type"
            options={tickets.map((data) => {
              return data.name;
            })}
            title="Tell us a ticket type we should prepare for you"
          />
          <TextArea
            label="Any suggestions"
            placeholder="Tell us your something you'll like to see in this years dinner"
          />
          <Button>Register</Button>
        </form>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
