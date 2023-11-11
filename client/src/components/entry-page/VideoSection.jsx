import React from "react";
import { Link } from "react-scroll";
import "../../components/design-files-css/entry-page/VideoSection.css";
import background_video from "../../imgs/background-video.mp4";

export default function HeroSection() {
  return (
    <div className="video-container">
      <video src={background_video} autoPlay loop muted />
      <h1>The best events in Poland</h1>
      <p>What are you waiting for?</p>
      <div className="video-btns">
        <Link
          to="g-container"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="btn-get-started"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
