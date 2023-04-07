import React from "react";
import { ButtonProps } from "./IButton";

const Button = (props: ButtonProps) => {
  const { id, type, className, value, onClick, style, disabled, children } =
    props;
  return (
    <button
      id={id ? id : ""}
      type={type}
      className={className ? "btn " + className : "btn"}
      onClick={onClick}
      style={style || null}
      value={value}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;
