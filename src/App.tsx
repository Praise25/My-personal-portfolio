import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import classes from "./App.module.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className={classes.container}>
        <Hero />
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}
