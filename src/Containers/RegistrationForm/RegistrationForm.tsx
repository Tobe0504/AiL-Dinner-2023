import { useContext, useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import TextArea from "../../Components/TextArea/TextArea";
import { AppContext } from "../../Context/AppContext";
import { tickets } from "../../Utilities/tickets";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  // COntext
  const { registrationFormData, setRegistrationFormData } =
    useContext(AppContext);

  // States
  const [ticketType, setTicketType] = useState("");

  // Utils
  const onChangeHandler = (e: any) => {
    setRegistrationFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //   Effects
  useEffect(() => {
    setRegistrationFormData((prevState) => {
      return { ...prevState, ticketType: ticketType };
    });

    // eslint-disable-next-line
  }, [ticketType]);

  return (
    <Layout>
      <div className={classes.container}>
        <h4>Secure Your Spot</h4>
        <p>
          Complete the form below to reserve your tickets and be part of the
          AIESEC on Lagos experience. Your journey into elegance awaits!
        </p>

        <form>
          <Input
            label="Name"
            placeholder="Tell us your name"
            isRequired
            name="name"
            onChange={onChangeHandler}
            value={registrationFormData.name}
          />
          <Input
            label="Email"
            placeholder="Tell us your name"
            type="email"
            isRequired
            name="email"
            onChange={onChangeHandler}
            value={registrationFormData.email}
          />
          <DropdownWithSearch
            label="Ticket type"
            selected={ticketType}
            setSelected={setTicketType}
            options={tickets.map((data) => {
              return data.name;
            })}
            title="Tell us a ticket type we should prepare for you"
          />
          <TextArea
            label="Any suggestions"
            placeholder="Tell us your something you'll like to see in this years dinner"
            name="suggestions"
            onChange={onChangeHandler}
            value={registrationFormData.suggestions}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Register
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
