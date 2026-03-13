import classes from "./Projects.module.css";
import Button from "./UI/Button";
import Project from "./Project";

import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <div className={classes["root-container"]}>
      <div className={classes["project-header"]}>
        <h1>Projects</h1>
        <Button className={classes.button}>CONTACT ME</Button>
      </div>
      <ul className={classes["list-container"]}>
        {PROJECTS.map((project, index) => (
          <Project project={project} index={index} />
        ))}
      </ul>
    </div>
  );
}
