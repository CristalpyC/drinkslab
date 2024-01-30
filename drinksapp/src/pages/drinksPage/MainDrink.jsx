import { Footer } from "../home/footer/Footer";
import { NavBar } from "../home/navbar/NavBar";
import "./MainDrinkStyle.css";
import { DrinkTitle } from "./drinkTitle/DrinkTitle";
import { DrinksInfo } from "./drinksInfo/DrinksInfo";
import { IngredientsInfo } from "./ingredientesInfo/IngredientsInfo";
import { useNavigate } from "react-router-dom";


export const MainDrink = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/drinkslab");
  }

  return (
    <div>
        <div className="search__container">
            <NavBar barTitle="Search..." logoClick={handleClick}/>
        </div>
        <DrinkTitle />
        <DrinksInfo />
        <IngredientsInfo />
        <Footer />
    </div>
  )
}
