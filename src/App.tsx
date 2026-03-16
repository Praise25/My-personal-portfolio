import Navbar from "./components/UI/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import classes from "./App.module.css";

export default function App() {
  return (
    <div className={classes["app-container"]}>
      <Navbar brandName="anenepraise" className={classes.navbar} aria-label="Main Navigation" />
      <main className={classes["main-container"]}>
        <Hero />
        <Skills/>
        <Projects/>
      </main>
      <ContactMe />
    </div>
  );
}
