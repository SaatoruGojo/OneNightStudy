import React from "react";
import "../MyComponents/style/About.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Bunk4Study</title>
        <meta name="description" content="Know more about Bunk4Study" />
      </Helmet>

      <section className="about-section">
        <div>
          <p className="about-text">
          We started Bunk4Study because in college everyone has to focus on
            extra study to get placement not on syllabus. But to take degree
            from college student have to pass semester exams as we are also
            college student and also face the same problem. After years of
            experience, we came to the result that to prepare for semester
            exams, the best way is to go through previous year papers. Now the
            problem arises: it is very hectic and time-consuming to find
            previous year papers from the library and asking seniors. That’s why
            we are here for you, to support you in finding previous year papers
            for different colleges without any hard work. Along the way, we are
            also working on different branches like notes, study courses, and
            many different sectors. But right now, we are focusing on Question
            Papers for different branches. We want to be your last-night study
            mentor who helps you in passing semester exams, so you can focus on
            your placement studies without any fear of failing in semester exams.
            Every student can download the question papers, notes, and study
            materials from this website. It is helpful for those students who
            don’t give much time to college studies and spend more time on
            placements. They will get more benefits in examinations. Every
            student can pass the exams with good marks and they don't have to
            spend much time searching for question papers on different sites.
            They can find all study materials in Bunk4Study. So, everyone can
            benefit from Bunk4Study.
          </p>
          <span className="divider"></span>
        </div>
      </section>

      <section className="footer-section">
        <div className="container">
          {/* Footer content */}
        </div>
      </section>
    </div>
  );
};

export default About;
