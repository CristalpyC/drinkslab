import { Contact } from "./contact/Contact";
import { DrinkImgs } from "./drinks/DrinkImgs";
import { Footer } from "./footer/Footer";
import "./homeStyle.css";
import { IngredientsImgs } from "./ingredients/IngredientsImgs";
import { NavBar } from "./navbar/NavBar";
import { useState } from "react";

export const MainHome = () => {
  const [navBarTitle, setNavBarTitle] = useState("Search...");

  const handleNavClick = () => {
        setNavBarTitle("Ej: Vodka");
  }
  
  return (
    <>
      <div className="mainhome__container">
          <div className="bar__background">
            <NavBar navClick={handleNavClick} barTitle={navBarTitle}/>
          </div>
          <DrinkImgs />
      </div>
      <IngredientsImgs />
      <Contact />
      <Footer />
    </>
  )
}
