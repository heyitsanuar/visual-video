import React from "react";
import { Link } from "react-router-dom";
import "./ButtonStyles.scss";

const Button = (props) => {
  const { className, children, to, onClick } = props;

  if (to) {
    return (
      <Link to={to} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`btn ${className}`} onclick={onClick}>
      {children}
    </button>
  );
};

export default Button;
