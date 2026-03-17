// import heroImg from "../assets/hero-picture.png";
// import gradientHeroImg from "../assets/gradient-hero-picture.png";
// import whiteCircle from "../assets/white-circle.svg";
import ovalsDesign from "../assets/ovals.svg";
import Button from "./UI/Button";
import sjw from "../assets/shadow-monarch.jpg"

import { useMediaQuery } from "react-responsive";

import classes from "./Hero.module.css";

export default function Hero() {
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  function getHeroText(isTablet: boolean, isMobile: boolean) {
    if (isTablet) {
      return (
        <h1>
          Nice to {"\n"}
          meet you! {"\n"}I'm <span> Anene Praise</span>.
        </h1>
      );
    } else if (isMobile) {
      return (
        <h1>
          Nice to meet you! {"\n"}
          I'm <span>Anene Praise</span>.
        </h1>
      );
    } else {
      return (
        <h1>
          Nice to meet you! {"\n"}
          I'm
          <span>Anene Praise</span>.
        </h1>
      );
    }
  }

  return (
    <>
      <div className={classes["hero-section"]}>
        <div className={classes["image-container"]}>
          {!isMobile && (
            <img
              className={classes["display-picture"]}
              src={sjw}
              alt="Anene Praise"
            />
          )}

          {isMobile && (
            <img
              className={classes["display-picture"]}
              src={sjw}
              alt="Anene Praise"
            />
          )}

          {/* <img
            className={classes["white-circle"]}
            src={whiteCircle}
            alt="White Circle"
          /> */}
        </div>
        <div className={classes["content-container"]}>
          {getHeroText(isTablet, isMobile)}

          <p>
            I'm a full-stack developer who loves crafting seamless experiences,
            from pixel-perfect interfaces to robust backend systems.
          </p>
          <Button className={classes.button} type="button">
            CONTACT ME
          </Button>
        </div>
      </div>
      <img
        className={classes["ovals-design"]}
        src={ovalsDesign}
        alt="Ovals Design"
      />
    </>
  );
}
