import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

import classes from "./Button.module.css";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  url?: string;
}

export default function Button({
  variant = "primary",
  url = "",
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
    url: string,
  ) {
    if (onClick) {
      onClick(event);
    } else if (url) {
      window.open(url, "_blank");
    }
  }

  return (
    <motion.button
      className={`${classes.button} btn--${variant} ${className ?? ""}`}
      whileHover={{ color: "var(--green)" }}
      onClick={(event) => handleClick(event, url)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
