import React from "react";
import "./style/Question.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Question = () => {
  return (
    <div className="wrapper">
      <div className="question-container">
        <Helmet>
          <title>Select Your College - Bunk4Study</title>
          <meta
            name="description"
            content="Question paper related to college exams"
          />
        </Helmet>

        <h1 className="question-heading">
          <b>Select Your College</b>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
        <div className="branch-container">
          <Link to={"/MDU"}>
            <button type="button" className="btn">
              Maharshi Dayanand University
            </button>
          </Link>

          <Link to={"/DCRU"}>
            <button type="button" className="btn">
              Deenbandhu Chhotu Ram University
            </button>
          </Link>

          <Link to={"/GJU"}>
            <button type="button" className="btn">
              Guru Jambheshwar University
            </button>
          </Link>
          <Link to={"/JCBU"}>
            <button type="button" className="btn">
              J.C. Bose University
            </button>
          </Link>

          <Link to={"/CDLU"}>
            <button type="button" className="btn">
              Chaudhary Devi Lal University
            </button>
          </Link>

          <Link to={"/KU"}>
            <button type="button" className="btn">
              Kurukshetra University
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

export default Question;
