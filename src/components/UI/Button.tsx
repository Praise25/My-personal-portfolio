import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

import classes from "./Button.module.css";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={`${classes.button} btn--${variant} ${className ?? ""}`}
      whileHover={{ color: "var(--black)" }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
