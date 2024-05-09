import React from "react";
import "./Button.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className,
  style,
}) => {
  return (
    <button
      type={type} // Menambahkan properti type ke dalam elemen button
      onClick={onClick}
      className={`button ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
