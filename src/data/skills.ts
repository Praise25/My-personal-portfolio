import reactLogo from "../assets/react.svg";
import typescriptLogo from "../assets/typescript.svg";
import nextJsLogo from "../assets/nextjs.svg";
import nodeJsLogo from "../assets/nodejs.svg";
import pythonLogo from "../assets/python.svg";
import tailwindLogo from "../assets/tailwindcss.svg";

interface Skill {
  id: number;
  name: string;
  logo: string;
}

export const SKILLS: Skill[] = [
  { id: 0, name: "React", logo: reactLogo },
  { id: 1, name: "Typescript", logo: typescriptLogo },
  { id: 2, name: "NextJs", logo: nextJsLogo },
  { id: 3, name: "NodeJs", logo: nodeJsLogo },
  { id: 4, name: "Python", logo: pythonLogo },
  { id: 5, name: "Tailwind", logo: tailwindLogo },
];
