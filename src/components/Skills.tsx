// import ovalsDesign2 from "../assets/ovals-2.svg"
import ovalsDesign4 from "../assets/ovals-4.svg"

import classes from "./Skills.module.css";

const SKILLS = [
  { id: 0, name: "HTML", years: 4 },
  { id: 1, name: "CSS", years: 4 },
  { id: 2, name: "Javascript", years: 4 },
  { id: 3, name: "Accessibility", years: 4 },
  { id: 4, name: "React", years: 3 },
  { id: 5, name: "Sass", years: 3 },
];

export default function Skills() {
  return (
    <div className={classes["root-container"]}>
      <ul className={classes["list-container"]}>
        {SKILLS.map((skill) => (
          <li key={skill.id}>
            <h1>{skill.name}</h1>
            <p>{skill.years} Years Experience</p>
          </li>
        ))}
      </ul>
      <img src={ovalsDesign4} alt="Oval Design 2" />
    </div>
  );
}
