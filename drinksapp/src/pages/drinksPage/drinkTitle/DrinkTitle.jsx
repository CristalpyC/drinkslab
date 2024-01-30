import "./drinkTitleStyle.css";
import svg from "../../../images/svg.png";
import { useDrinksInfo } from "../../../hooks/DrinksContext";

export const DrinkTitle = () => {
  const { drinksInfo } = useDrinksInfo();

  return (
    <div className="drink__title">
        <img src={svg} alt="" />
        <h2>{drinksInfo}</h2>
        <img src={svg} alt="" />
    </div>
  )
}
