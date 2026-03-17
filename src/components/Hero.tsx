import ovalsDesign from "../assets/ovals.svg";
import Button from "./UI/Button";
import sjw from "../assets/shadow-monarch.jpg";

import { useMediaQuery } from "react-responsive";
import { TypeAnimation } from "react-type-animation";

import classes from "./Hero.module.css";

interface HeroProps {
  onClick: () => void;
}

export default function Hero({ onClick }: HeroProps) {
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  function getHeroText(isTablet: boolean, isMobile: boolean) {
    if (isTablet) {
      return (
        <h1>
          Nice to {"\n"}
          meet you! {"\n"}I'm{" "}
          <TypeAnimation
            sequence={[
              "Anene Praise",
              1500,
              "a Frontend Dev",
              1500,
              "a Backend Dev",
              1500,
              "a Gamer",
              1500,
            ]}
            repeat={Infinity}
            cursor={false}
          />
        </h1>
      );
    } else if (isMobile) {
      return (
        <h1>
          Nice to meet you! {"\n"}
          I'm{" "}
          <TypeAnimation
            sequence={[
              "Anene Praise",
              1500,
              "a Frontend Dev",
              1500,
              "a Backend Dev",
              1500,
              "a Gamer",
              1500,
            ]}
            repeat={Infinity}
            cursor={false}
          />
        </h1>
      );
    } else {
      return (
        <h1>
          Nice to meet you! {"\n"}
          I'm
          <TypeAnimation
            sequence={[
              "Anene Praise",
              1500,
              "a Frontend Dev",
              1500,
              "a Backend Dev",
              1500,
              "a Gamer",
              1500,
            ]}
            repeat={Infinity}
            cursor={false}
          />
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
        </div>
        <div className={classes["content-container"]}>
          {getHeroText(isTablet, isMobile)}

          <p>
            I'm a full-stack developer who loves crafting seamless experiences,
            from pixel-perfect interfaces to robust backend systems.
          </p>
          <Button className={classes.button} type="button" onClick={onClick}>
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
