import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MDU = () => {
  return (
    <div className="wrapper">
      <div className="question-container">
      <Helmet>
        <title>MDU Question Paper | OneNightStudy</title>
        <meta name="description" content="Find a wide range of Maharshi Dayanand University question papers and previous year papers on OneNightStudy. Ace your exams with our comprehensive collection ofMaharshi Dayanand University question papers and study materials." />
        <meta name="keywords" content="MDU, Maharshi Dayanand University, Rohtak, Haryana, University, Higher Education, Courses, Exams, Question Papers, Syllabus, Study Materials,Student Resources, OneNightStudy, previous year papers, study materials, question papers, MDU, CDLU, computer science, mechanical engineering, study notes, study courses, academic resources, exam preparation, download question papers, study guides, user-friendly interface , Computer Science, Mechanical Engineering, Electronics & Communications Engineering, Civil Engineering,  Bio - Tech Engineering " />


        </Helmet>
        <h1 className="question-heading">
          <b>Maharshi Dayanand University</b>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
        <div className="branch-container">
          <Link to={"/CseBranchMDU"}>
            <button type="button" className="btn btn-primary">
              Computer Science Engineering
            </button>
          </Link>

          <Link to={"/EceBranchMDU"}>
            <button type="button" className="btn btn-success">
              Electronics & Communications Engineering
            </button>
          </Link>

          <Link to={"/MeBranchMDU"}>
            <button type="button" className="btn btn-danger">
              Mechanical Engineering
            </button>
          </Link>

          <Link to={"/EeBranchMDU"}>
            <button type="button" className="btn btn-secondary">
              Electrical Engineering
            </button>
          </Link>

          <Link to={"/CeBranchMDU"}>
            <button type="button" className="btn btn-info">
              Civil Engineering
            </button>
          </Link>

          <Link to={"/BeBranchMDU"}>
            <button type="button" className="btn btn-warning">
              Bio - Tech Engineering
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer">
      <h3>Latest Update</h3>
        <p>Right Now Only Computer Science Paper are Available</p>
        <p>Click On your Branch to contribute On website</p>
      </footer>
    </div>
  );
};

export default MDU;
