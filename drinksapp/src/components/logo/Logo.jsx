import logo from "../../images/logoIcon.png";
import { Trees } from "../trees/Trees";
import "./logoStyle.css";
import PropTypes from "prop-types";

export const Logo = ({isTrue, onClick}) => {
  return (
    <div className="logo__container">
        <img src={logo} alt="" onClick={onClick}/>
        <Trees isTrue={isTrue}/>
    </div>
  )
}

Logo.propTypes = {
  isTrue: PropTypes.any,
  onClick: PropTypes.any,
}
