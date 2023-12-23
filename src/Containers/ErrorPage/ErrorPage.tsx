import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>
          We <span>will</span> be back!
        </h4>
      </div>
    </div>
  );
};

export default ErrorPage;
