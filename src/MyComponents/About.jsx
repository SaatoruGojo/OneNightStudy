import React from "react";
import "../MyComponents/style/About.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - OneNightStudy</title>
        <meta name="description" content="Know more about OneNightStudy" />
      </Helmet>

      <section className="about-section">
        <div>
          <p className="about-text">
            Welcome to OneNightStudy, your go-to platform for effortless access
            to previous year papers and study materials for various colleges and
            branches. We understand the importance of having access to
            comprehensive resources to excel in your academics without the
            hassle of extensive searching. With our user-friendly interface and
            dedicated team, we aim to provide students with a centralized hub
            where they can easily find and download question papers for their
            desired branches and colleges. But we don't stop there! We are
            committed to expanding our offerings to include a wide range of
            study materials such as notes, study courses, and much more.
          </p>
          <span className="divider"></span>
        </div>
      </section>
    </div>
  );
};

export default About;
