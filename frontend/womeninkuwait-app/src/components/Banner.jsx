import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "../Banner.css";

const Banner = () => {
  return (
    <div className="top-banner">
      <span className="banner-text">
        Join a network of inspiring women -{" "}
        <span className="banner-highlight">Connect. Grow. Lead.</span>
      </span>
      {/*<a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="banner-linkedin"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={26} />
      </a> */}
    </div>
  );
};

export default Banner;