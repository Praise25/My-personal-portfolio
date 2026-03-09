import Navbar from "./UI/Navbar";
import ovalsdesign5 from "../assets/ovals-5.svg"

import classes from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <footer className={classes["root-container"]}>
      <div className={classes["main-content"]}>
        <article>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I {"\n"} could
            help. Please fill in the form, and I’ll get back {"\n"}
            to you as soon as possible.
          </p>
        </article>
        <form action="">
          <input type="text" id="name" placeholder="NAME" />

          <input type="email" id="email" placeholder="EMAIL" />

          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE"
          ></textarea>
        </form>
      </div>
      <img className={classes["oval-design"]} src={ovalsdesign5} alt="Oval Design 5" />
      <div className={classes["navbar-container"]}>
        <Navbar className={classes.navbar} brandName="adamkeyes" />
      </div>
    </footer>
  );
}
