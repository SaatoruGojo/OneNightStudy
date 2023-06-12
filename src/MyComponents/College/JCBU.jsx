import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const JCBU = () => {
  return (
    <div className="wrapper">
      <div className="question-container">
        <Helmet>
        <title>YMCA Question Paper | OneNightStudy</title>
        <meta name="description" content="Find a wide range of J.C. Bose University question papers and previous year papers on OneNightStudy. Ace your exams with our comprehensive collection of J.C. Bose University question papers and study materials." />
        <meta name="keywords" content="YMCA, J.C. Bose University, Faridabad, Haryana, University, Higher Education, Courses, Exams, Question Papers, Syllabus, Study Materials,Student Resources, OneNightStudy, previous year papers, study materials, question papers, computer science, mechanical engineering, study notes, study courses, academic resources, exam preparation, download question papers, study guides, user-friendly interface , Computer Science, Mechanical Engineering, Electronics & Communications Engineering, Civil Engineering,  Bio - Tech Engineering " />
        </Helmet>
        <h1 className="question-heading">
          <b>J.C. Bose University</b>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
        <div className="branch-container">
          <Link to={"/CseBranchJCBU"}>
            <button type="button" className="btn btn-primary">
              Computer Science Engineering
            </button>
          </Link>

          <Link to={"/EceBranchJCBU"}>
            <button type="button" className="btn btn-success">
              Electronics & Communications Engineering
            </button>
          </Link>

          <Link to={"/MeBranchJCBU"}>
            <button type="button" className="btn btn-danger">
              Mechanical Engineering
            </button>
          </Link>

          <Link to={"/EeBranchJCBU"}>
            <button type="button" className="btn btn-secondary">
              Electrical Engineering
            </button>
          </Link>

          <Link to={"/CeBranchJCBU"}>
            <button type="button" className="btn btn-info">
              Civil Engineering
            </button>
          </Link>

          <Link to={"/BeBranchJCBU"}>
            <button type="button" className="btn btn-warning">
              Bio - Tech Engineering
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Bunk4Study. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JCBU;
