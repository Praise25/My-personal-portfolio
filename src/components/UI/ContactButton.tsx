import type React from "react";
import classes from "./ContactButton.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function ContactButton({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${classes.button} btn--${variant} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
