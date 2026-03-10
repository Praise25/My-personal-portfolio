import Button from "./UI/Button";
import designPortfolio from "../assets/designer-portfolio.jpg";
import landingPage from "../assets/landing-page.png";
import todoApp from "../assets/todo-app.png";
import entertainmentApp from "../assets/entertainment-app.png";
import memoryGame from "../assets/memory-game.png";
import artShowcase from "../assets/art-showcase.png";

import { motion } from "motion/react";

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

const container = {
  visible: {},
  hidden: {},
};

const image = {
  visible: { scale: 1.02 },
  hidden: { scale: 1 },
};

const overlay = {
  visible: { opacity: 1, scale: 1.02 },
  hidden: { opacity: 0, scale: 1 },
};

export default function Projects() {
  return (
    <div className={classes["root-container"]}>
      <div className={classes["project-header"]}>
        <h1>Projects</h1>
        <Button className={classes.button}>CONTACT ME</Button>
      </div>
      <ul className={classes["list-container"]}>
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <motion.a
              className={classes["image-container"]}
              href={project.projectLink}
              variants={container}
              initial="hidden"
              whileHover="visible"
            >
              <motion.div className={classes.overlay} variants={overlay}>
                <Button className={classes["overlay-button"]}>
                  VIEW PROJECT
                </Button>
                <Button className={classes["overlay-button"]}>VIEW CODE</Button>
              </motion.div>
              <motion.img
                variants={image}
                src={project.projectImg}
                alt={project.projectTitle}
              />
            </motion.a>
            <h2>{project.projectTitle.toUpperCase()}</h2>
            <ul className={classes["tags-container"]}>
              {project.projectTags.map((tag, index) => (
                <li key={index}>
                  <p>{tag.toUpperCase()}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
