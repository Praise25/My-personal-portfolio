import ContactButton from "./UI/ContactButton";
import designPortfolio from "../assets/designer-portfolio.jpg";
import landingPage from "../assets/landing-page.png";
import todoApp from "../assets/todo-app.png";
import entertainmentApp from "../assets/entertainment-app.png";
import memoryGame from "../assets/memory-game.png";
import artShowcase from "../assets/art-showcase.png";

import classes from "./Projects.module.css";

const PROJECTS = [
  {
    projectLink: "#",
    projectImg: designPortfolio,
    projectTitle: "Design Portfolio",
    projectTags: ["HTML", "CSS"],
  },
  {
    projectLink: "#",
    projectImg: landingPage,
    projectTitle: "E-Learning Landing Page",
    projectTags: ["HTML", "CSS"],
  },
  {
    projectLink: "#",
    projectImg: todoApp,
    projectTitle: "Todo Web App",
    projectTags: ["HTML", "CSS", "Javascript"],
  },
  {
    projectLink: "#",
    projectImg: entertainmentApp,
    projectTitle: "Entertainment Web App",
    projectTags: ["HTML", "CSS", "Javascript"],
  },
  {
    projectLink: "#",
    projectImg: memoryGame,
    projectTitle: "Memory Game",
    projectTags: ["HTML", "CSS", "Javascript"],
  },
  {
    projectLink: "#",
    projectImg: artShowcase,
    projectTitle: "Art Gallery Showcase",
    projectTags: ["HTML", "CSS", "Javascript"],
  },
];

export default function Projects() {
  return (
    <div className={classes["root-container"]}>
      <div className={classes["project-header"]}>
        <h1>Projects</h1>
        <ContactButton className={classes.button}>CONTACT ME</ContactButton>
      </div>
      <ul className={classes["list-container"]}>
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <a href={project.projectLink}>
              <img src={project.projectImg} alt={project.projectTitle} />
              <h2>{project.projectTitle.toUpperCase()}</h2>
              <ul className={classes["tags-container"]}>
                {project.projectTags.map((tag, index) => (
                  <li key={index}>
                    <p>{tag.toUpperCase()}</p>
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
