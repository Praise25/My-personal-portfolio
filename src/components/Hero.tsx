import heroImg from "../assets/hero-picture.png";
import whiteCircle from "../assets/white-circle.svg";
import ovalsDesign from "../assets/ovals.svg";
import Button from "./UI/Button";

import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={classes["hero-section"]}>
        <div>
          <h1>
            Nice to meet you! {"\n"}
            I'm
            <span>
              Adam Keyes.
              <hr />
            </span>
          </h1>

          <p>
            Based in the UK, I’m a front-end developer {"\n"}
            passionate about building accessible web apps {"\n"}
            that users love.
          </p>
          <Button className={classes.button}>CONTACT ME</Button>
        </div>

        <div className={classes["image-container"]}>
          <img src={heroImg} alt="Adam Keyes" />
          <img
            className={classes["white-circle"]}
            src={whiteCircle}
            alt="White Circle"
          />
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
