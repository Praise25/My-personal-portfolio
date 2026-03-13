import classes from "./Skills.module.css";
import ovalsDesign6 from "../assets/ovals-6.svg"

import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <div className={classes["root-container"]}>
      <ul className={classes["list-container"]}>
        {SKILLS.map((skill) => (
          <li key={skill.id}>
            <h2>{skill.name}</h2>
            <p>{skill.years} Years Experience</p>
          </li>
        ))}
      </ul>
      <img src={ovalsDesign6} alt="Oval Design 2" />
    </div>
  );
}
