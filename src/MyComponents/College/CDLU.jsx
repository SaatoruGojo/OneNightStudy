import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CDLU = () => {
  return (
    <div className="wrapper">
      <div className="question-container">
      <Helmet>
        <title>CDLU Question Paper | OneNightStudy</title>
        <meta name="description" content="Find a wide range of Chaudhary Devi Lal University question papers and previous year papers on OneNightStudy. Ace your exams with our comprehensive collection of Chaudhary Devi Lal University question papers and study materials." />
        <meta name="keywords" content="Chaudhary Devi Lal University, CDLU, Devi Lal University, Chaudhary Devi Lal University sirsa, CDLU sirsa, OneNightStudy, previous year papers, study materials, question papers, MDU, CDLU, computer science, mechanical engineering, study notes, study courses, academic resources, exam preparation, download question papers, study guides, user-friendly interface,  Computer Science, Mechanical Engineering, Electronics & Communications Engineering, Civil Engineering,  Bio - Tech Engineering "/>

        </Helmet>
      
        <h1 className="question-heading">
          <b>Chaudhary Devi Lal University</b>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
        <div className="branch-container">
          <Link to={"/CseBranchCDLU"}>
            <button type="button" className="btn btn-primary">
              Computer Science Engineering
            </button>
          </Link>

          <Link to={"/EceBranchCDLU"}>
            <button type="button" className="btn btn-success">
              Electronics & Communications Engineering
            </button>
          </Link>

          <Link to={"/MeBranchCDLU"}>
            <button type="button" className="btn btn-danger">
              Mechanical Engineering
            </button>
          </Link>

          <Link to={"/EeBranchCDLU"}>
            <button type="button" className="btn btn-secondary">
              Electrical Engineering
            </button>
          </Link>

          <Link to={"/CeBranchCDLU"}>
            <button type="button" className="btn btn-info">
              Civil Engineering
            </button>
          </Link>

          <Link to={"/BeBranchCDLU"}>
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

export default CDLU;
