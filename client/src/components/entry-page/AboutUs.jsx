import React from "react";
import "../../components/design-files-css/entry-page/AboutUs.css";
import { Button } from "./Button";

export default function AboutUs() {
  return (
    <section className="g-wrapper">
      <div className="g-container">
        <div className="inner-container">
          <span className="primaryText">About us</span>
          <span className="secondaryText">
            WhatAndWhere is a website for finding and participating in events in{" "}
            <strong>Poland</strong>. On our site, you can find and take part in{" "}
            <strong>various events</strong> throughout the country. Find your
            next unique experience on <strong>WhatAndWhere</strong>!
          </span>
        </div>
        <div className="btns">
          <Button buttonStyle="primary-large">Login</Button>
          <Button buttonStyle="primary-large">Sign up</Button>
        </div>
      </div>
    </section>
  );
}
