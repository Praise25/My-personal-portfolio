import devPortfolio from "../assets/dev-portfolio.png";
import quizApp from "../assets/quiz-app.png";
import ticTacToe from "../assets/tic-tac-toe.png";

export interface Project {
  title: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Developer Portfolio",
    tags: ["React", "Typescript"],
    imageUrl: devPortfolio,
    githubUrl: "https://github.com/Praise25/Developer-portfolio",
    liveUrl: "https://developer-portfolio-version-one.vercel.app/",
  },
  {
    title: "Quiz Application",
    tags: ["HTML", "CSS", "Javascript", "Express"],
    imageUrl: quizApp,
    githubUrl: "https://github.com/Praise25/Quiz-App",
    liveUrl: "https://quiz-app-3z8h.onrender.com/",
  },
  {
    title: "Tic-Tac-Toe Game",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: ticTacToe,
    githubUrl: "https://github.com/Praise25/Tic-Tac-Toe-Game",
    liveUrl: "https://praise25.github.io/Tic-Tac-Toe-Game/",
  },
];
