import "./IngredientsImgsStyle.css";
import treeSvg from "../../../images/svg2.png";
import { useEffect, useState } from "react";

export const IngredientsImgs = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleIngredients = async () => {
    const ingredientsArray = ['gin', 'vodka', 'tequila'];

    const url = ingredientsArray.map(items => {
      return `https://www.thecocktaildb.com/images/ingredients/${items}.png`
    });

    try{
      const data = await Promise.all((url.map(urls => fetch(urls))));

      if (data){
        const dataUrls = data.map(items => items.url)
        setIngredients(dataUrls)
      } else {
        console.log('Error fetching data', data);
      }
    } catch(error){
      console.log('ERROR: ', error.message);
    }
  }

  useEffect(() => {
      handleIngredients();
  }, []);

  return (
    <div className="ingredients__container">
        <div className="ingredientsTitle__container">
            <img className="tree__pic1" src={treeSvg} alt="" />
            <h2>Popular <br /> ingredients</h2>
            <img className="tree__pic2" src={treeSvg} alt="" />
        </div>
        <div className="ingredients__pic">
            {ingredients.map((url, index) => {
              return <img className="ingredient__pic" key={index} src={url} alt="" />
            })} 
        </div>
    </div>
  )
}
