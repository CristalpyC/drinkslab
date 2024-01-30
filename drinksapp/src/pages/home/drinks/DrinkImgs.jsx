import "./DrinkImgsStyle.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDrinksInfo } from "../../../hooks/DrinksContext";

function TitlebarBelowImageList() {
  const [isHovered, setIsHovered] = useState(false);
  const [drinkTitle, setDrinkTitle] = useState([]);
  const [drinksPic, setDrinkPic] = useState([]);
  const { drinksInfo, setDrinksInfo } = useDrinksInfo();
  const navigate = useNavigate();
  
  const styles = {
    image: {
      transition: 'filter 0.3s ease-in-out',
      filter: isHovered ? 'grayscale(50%)' : 'grayscale(0)'
    }
  };

  const drinks = [
    'Mojito', 
    'Old Fashioned', 
    'Long Island Tea', 
    'Negroni', 
    'Whiskey Sour', 
    'Dry Martini', 
    'Daiquiri', 
    'Margarita',
    'Gin Lemon',
    'Gin Tonic',
    'Vodka Tonic',
    'Old Cuban'
  ];

  const handleDrink = async () => {
    try{
      const urls = drinks.map(items => {
        return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${items}`
      });

      const data = await Promise.all(urls.map(url => fetch(url)));

      const response = await Promise.all(data.map(values => values.json()))

      if (response){
        const drinksTitleName = response.map((values) => {return values.drinks[0].strDrink});
        const drinksUrl = response.map((values) => {return values.drinks[0].strDrinkThumb});
        setDrinkPic(drinksUrl);
        setDrinkTitle(drinksTitleName);
        
      } else{
        console.log("Error fetching data");
      }

    } catch(error){
      console.error('ERROR: ', error.message);
    }
  }

 
  const handleValue = (item) => {
    setDrinksInfo(item);
    navigate("/drinkslab/drinks/prueba");
  }

  
useEffect(() => {
  if (drinksInfo !== null) {
    console.log('DRINK: ', drinksInfo);
  }
}, [drinksInfo]);


  const itemData = [
    {
      img: drinksPic[0],
      title: drinkTitle[0],
    },
    {
      img: drinksPic[1],
      title: drinkTitle[1],
    },
    {
      img: drinksPic[2],
      title: drinkTitle[2],
    },
    {
      img: drinksPic[3],
      title: drinkTitle[3],
    },
    {
      img: drinksPic[4],
      title: drinkTitle[4],
    },
    {
      img: drinksPic[5],
      title: drinkTitle[5],
    },
    {
      img: drinksPic[6],
      title: drinkTitle[6],
    },
    {
      img: drinksPic[7],
      title: drinkTitle[7],
    },
    {
      img: drinksPic[8],
      title: drinkTitle[8],
    },
    {
      img: drinksPic[9],
      title: drinkTitle[9],
    },
    {
      img: drinksPic[10],
      title: drinkTitle[10],
    },
    {
      img: drinksPic[11],
      title: drinkTitle[11],
    }
    
  ];

  

  useEffect(() => {
    handleDrink();
  }, []);

  

  return (
    <ImageList 
    sx={{ 
        width: '50%', 
        height: 450, 
        marginTop: 5, 
        marginLeft: 5,
        '@media screen and (max-width: 776px)': {
            width: '90%'
        },

        '@media screen and (max-width: 390px)': {
            width: '80%'
        }
    }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{color: "white"}}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={styles.image}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleValue(item.title)}
          />
          <ImageListItemBar 
            sx={{
                ':hover': {
                'color': '#a6d0d7'
                }
            }}
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}



export const DrinkImgs = () => {
  return (
    <div className="drinksImg__container">
        <TitlebarBelowImageList />
        <img src="https://static.vecteezy.com/system/resources/previews/024/490/335/non_2x/the-ice-cubes-falling-in-the-beer-glass-ai-generative-free-png.png" alt="" />
    </div>
  )
}
