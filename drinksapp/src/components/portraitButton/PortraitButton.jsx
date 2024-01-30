import "./portraitButtonStyle.css";
import { Link } from "react-router-dom";

export const PortraitButton = () => {
  return (
    <div className="portraitButton__container">
        <Link to="/drinkslab"><button>Explore some drinks</button></Link>
    </div>
  )
}
