import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes["hero-section"]}>
      <h1>
        Nice to meet you! {"\n"}
        I'm<span>Adam Keyes.<hr/></span>
      </h1>

      <p>
        Based in the UK, I’m a front-end developer {"\n"}
        passionate about building accessible web apps {"\n"}
        that users love.
      </p>
      <button>CONTACT ME</button>
    </div>
  );
}
