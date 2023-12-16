import classes from "./Header.module.css";
import logo from "../../Assets/Images/logo.svg";

const Header = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
