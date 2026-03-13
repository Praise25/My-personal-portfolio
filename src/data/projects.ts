import designPortfolio from "../assets/designer-portfolio.jpg";
import landingPage from "../assets/landing-page.png";
import todoApp from "../assets/todo-app.png";
import entertainmentApp from "../assets/entertainment-app.png";
import memoryGame from "../assets/memory-game.png";
import artShowcase from "../assets/art-showcase.png";

interface Project {
  title: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Design Portfolio",
    tags: ["HTML", "CSS"],
    imageUrl: designPortfolio,
    liveUrl: "#",
  },
  {
    title: "E-Learning Landing Page",
    tags: ["HTML", "CSS"],
    imageUrl: landingPage,
    liveUrl: "#",
  },
  {
    title: "Todo Web App",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: todoApp,
    liveUrl: "#",
  },
  {
    title: "Entertainment Web App",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: entertainmentApp,
    liveUrl: "#",
  },
  {
    title: "Memory Game",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: memoryGame,
    liveUrl: "#",
  },
  {
    title: "Art Gallery Showcase",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: artShowcase,
    liveUrl: "#",
  },
];
