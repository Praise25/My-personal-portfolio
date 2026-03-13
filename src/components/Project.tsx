import classes from "./Project.module.css";
import Button from "./UI/Button";

import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";  
import { useState } from "react";
import { type Project } from "../data/projects";

interface ProjectProps {
  project: Project;
}

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

export default function Project({ project }: ProjectProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function handleHoverStart() {
    setShowOverlay(true);
  }

  function handleHoverEnd() {
    setShowOverlay(false);
  }

  return (
    <li>
      <motion.div
        className={classes["image-container"]}
        variants={container}
        initial="hidden"
        whileHover="visible"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {!isTabletOrMobile && <motion.div className={classes.overlay} variants={overlay}>
          {showOverlay && (
            <>
              <Button className={classes["overlay-button"]}>
                VIEW PROJECT
              </Button>
              <Button className={classes["overlay-button"]}>VIEW CODE</Button>
            </>
          )}
        </motion.div>}
        

        <motion.img
          variants={image}
          src={project.imageUrl}
          alt={project.title}
        />
      </motion.div>

      {/* TODO: Center title,tags and buttons */}
      <h3>{project.title.toUpperCase()}</h3>
      <ul className={classes["tags-container"]}>
        {project.tags.map((tag, index) => (
          <li key={index}>
            <p>{tag.toUpperCase()}</p>
          </li>
        ))}
      </ul>

      {isTabletOrMobile && (
        <div className={classes["button-container"]}>
          <Button className={classes["overlay-button"]}>VIEW PROJECT</Button>
          <Button className={classes["overlay-button"]}>VIEW CODE</Button>
        </div>
      )}
    </li>
  );
}
