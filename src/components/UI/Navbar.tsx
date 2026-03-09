import classes from "./Navbar.module.css";

import githubIcon from "../../assets/github.svg";
import frontendMentorIcon from "../../assets/frontend-mentor.svg";
import linkedinIcon from "../../assets/linkedIn.svg";
import twitterIcon from "../../assets/twitter.svg";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brandName: string
}

export default function Navbar({brandName, className, ...props }: NavbarProps) {
  return (
    <nav className={`${classes["nav-content"]} ${className}`} {...props}>
      <h1>{brandName}</h1>
      <ul>
        <li>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={frontendMentorIcon} alt="frontend mentor icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
