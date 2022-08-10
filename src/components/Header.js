import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const _onClick = () => {
    console.log("event");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={_onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//css in jsx
// const headingStyle ={
//     color : "red",
//     backgroundColor : "black"
// }
export default Header;
