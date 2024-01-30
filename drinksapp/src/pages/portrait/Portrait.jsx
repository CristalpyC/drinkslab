import { Logo } from "../../components/logo/Logo";
import { PortraitButton } from "../../components/portraitButton/PortraitButton";
import "./portraitStyle.css";
import drinkPic from "../../images/bottlePic.png";

export const Portrait = () => {
  return (
    <div>
        <Logo isTrue={true}/>
        <div className="portrait__container">
          <div className="title__container">
            <h1>Elevate your drinking <br /> experience</h1>
            <PortraitButton />
          </div>
          <div className="pic__container">
            <img src={drinkPic} alt="" />
          </div>
        </div>
    </div>
  )
}
