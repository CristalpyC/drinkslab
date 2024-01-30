import { useEffect, useState } from "react";
import { useDrinksInfo } from "../../../hooks/DrinksContext";
import "./IngredientsInfoStyle.css";

export const IngredientsInfo = () => {
    const { drinksInfo } = useDrinksInfo();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinksInfo}`;
    const [servePrep, setServe] = useState(null);
    const [ingData, setData] = useState([]);
    const [images, setImages] = useState([]);

    const handleImages = async () => {
      try{
        const urlImg = ingData.map(items => {
          return `https://www.thecocktaildb.com/images/ingredients/${items}.png`
        })

        const urls = await Promise.all(urlImg.map(urli => fetch(urli)));

        if (urls){
          const responseUrls = urls.map(items => {
            return items.url
          })
          setImages(responseUrls);
          //console.log(images)
        } else{
          console.log('Error fetching data');
        }
       } catch(error){
        console.log('ERROR: ', error.message);
      }
    }

    const handleIngredientsInfo = async () => {
      try{
        const dataInfo = await fetch(url);
        if (dataInfo.ok){
          const responseInfo = await dataInfo.json();
          let ingredients = [];

          for (let i = 1; i <= 15 ; i++){
            const ingredientsData = responseInfo.drinks[0][`strIngredient${i}`];
            if (ingredientsData !== null){
              ingredients.push(ingredientsData);
            }
          } 

          setData(ingredients);
          handleImages();
          //console.log(ingData);
          
        } else{
          console.log('Error fetching data');
        }
      } catch(error){
        console.log('ERROR: ', error.message);
      }
    }

    const handleInfo = async () => {
      try{
          const data = await fetch(url);
          if (data.ok){
            const response = await data.json();
            const serve = response.drinks[0].strGlass;
            setServe(serve);

          } else{
            console.log('Error fetching data');
          }

      } catch(error){
        console.log('ERROR: ', error.message);
      }
  }

    useEffect(() => {
      const fetchData = async () => {
          await handleInfo();
          await handleIngredientsInfo();
          //await handleImages();
      };

      fetchData();
  }, [drinksInfo]);

    useEffect(() => {
        if (servePrep !== null){
          console.log('Serve in: ', servePrep);
        } 
    }, [servePrep]);

    useEffect(() => {
      if (ingData.length > 0) {
          handleImages();
      }
  }, [ingData]);

    useEffect(() => {
      if (images.length !== 0){
        console.log('Images: ', images);
      }
  }, [images]);

  return (
    <>
    <h2 className="ingredientsInfo__title">Ingredients</h2>
    <div className="ingredientsInfo__container">
        <div className="ingredientsT__container">
            {images.map((values, index) => (
              <img key={index} src={values} alt="" />
            ))}
        </div>
    </div>
    <p className="serve__instruction">SERVE IN: <span>{servePrep}</span></p>
    </>
  )
}
