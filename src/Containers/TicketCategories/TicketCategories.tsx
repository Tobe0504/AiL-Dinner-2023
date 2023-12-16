import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { tickets } from "../../Utilities/tickets";
import classes from "./TicketCategories.module.css";

const TicketCategories = () => {
  // Router
  const navigate = useNavigate();
  return (
    <Layout>
      <div className={classes.container}>
        <h4>Our Ticket Categories</h4>
        <p>
          Embark on a night of elegance and celebration – choose your ticket,
          reserve your moment, and join us for an unforgettable AIESEC on Lagos
          experience.
        </p>

        <div className={classes.ticketsCOntainer}>
          {tickets.map((data, i) => {
            return (
              <div key={i} className={classes.ticket}>
                <img
                  src="https://res.cloudinary.com/dmpdhnjqs/image/upload/v1695719300/samples/two-ladies.jpg"
                  alt="Dinner"
                />
                <div className={classes.rightSection}>
                  <h4>
                    {data.name} ({data.subCategory})
                  </h4>
                  <p>{data.description}</p>
                  <p>Price: &#8358;{data.price}</p>
                  <div className={classes.buttonContainer}>
                    <Button>
                      Reserve a {data.subCategory.toLowerCase()} ticket
                    </Button>
                    <Button
                      type="secondary"
                      onClick={() => {
                        navigate(data.slug);
                      }}
                    >
                      Understand the concept
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default TicketCategories;
