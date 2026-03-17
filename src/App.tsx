import classes from "./App.module.css";
import Navbar from "./components/UI/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import { useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      inputRef.current?.focus();
    }, 800);
  }

  return (
    <div className={classes["app-container"]}>
      <Navbar
        brandName="anenepraise"
        className={classes.navbar}
        aria-label="Main Navigation"
      />
      <main className={classes["main-container"]}>
        <Hero onClick={handleClick} />
        <Skills />
        <Projects />
      </main>
      <ContactMe innerRef={inputRef} />
    </div>
  );
}
