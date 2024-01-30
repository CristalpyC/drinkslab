import { useEffect, useState } from "react";
import { useDrinksInfo } from "../../../hooks/DrinksContext";
import "./drinksInfoStyle.css";

export const DrinksInfo = () => {
  const { drinksInfo } = useDrinksInfo();
  const [drinkPic, setPic] = useState();
  const [prep, setPrep] = useState();

  useEffect(() => {
    const handleInfoPrep = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinksInfo}`;

      try {
        const data = await fetch(url);

        if (data.ok) {
          const response = await data.json();

          if (response.drinks && response.drinks.length > 0) {
            const img = response.drinks[0].strDrinkThumb;
            const instructions = response.drinks[0].strInstructions;
            setPic(img);
            setPrep(instructions);

          } else {
            console.log('No drinks found');
          }
        } else {
          console.log('Error fetching data');
        }

      } catch (error) {
        console.log('ERROR: ', error.message);
      }
    };

    handleInfoPrep();
  }, [drinksInfo]);

  useEffect(() => {
    if (drinkPic !== undefined) {
      console.log('drink url:', drinkPic);

    } else if (prep !== undefined){
      console.log('Preparation: ', prep);

    }
  }, [drinkPic]);
    
  return (
    <div className="drinksInfo__container">
        <div className="info__container">
            <h3>Preparation</h3>
            <p >
            {prep}
            </p>
        </div>
        <img src={drinkPic} alt="" />
    </div>
  )
}
