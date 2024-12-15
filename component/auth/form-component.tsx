import "./sign-up.css";
import React from "react";

interface ButtonProps {
  children: any;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
}

export default function Input({
  type,
  placeholder,
  name,
  className,
  id,
}: {
  type: string;
  placeholder: string;
  name: string;
  className: string;
  id: string;
}) {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
      />
    </>
  );
}
export const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
