import React from "react";
import { Link } from "react-router-dom";
import "../../components/design-files-css/entry-page/Button.css";

export const Button = ({ children, buttonStyle }) => {
  return (
    <Link to="/">
      <button className={buttonStyle}>{children}</button>
    </Link>
  );
};
