import classes from "./Skills.module.css";
import ovalsDesign6 from "../assets/ovals-6.svg";

import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <div className={classes["root-container"]}>
      <h2>Tools of the Trade</h2>
      <ul className={classes["list-container"]}>
        {SKILLS.map((skill) => (
          <li key={skill.id}>
            {/* <h2>{skill.name}</h2> */}
            <img src={skill.logo} alt={`${skill.name} logo`} />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
      <img className={classes["ovals-design"]} src={ovalsDesign6} alt="Oval Design 2" />
    </div>
  );
}
