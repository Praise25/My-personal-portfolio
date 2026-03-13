import classes from "./Projects.module.css";
import Button from "./UI/Button";

import { motion } from "motion/react";
import { PROJECTS } from "../data/projects";


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
              href={project.liveUrl}
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
                src={project.imageUrl}
                alt={project.title}
              />
            </motion.a>
            <h2>{project.title.toUpperCase()}</h2>
            <ul className={classes["tags-container"]}>
              {project.tags.map((tag, index) => (
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
