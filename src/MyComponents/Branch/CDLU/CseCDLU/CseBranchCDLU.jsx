import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CseBranchCDLU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>CseBranchCDLU</title>
          <meta name="description" content="CDLU's CSE's Semester-wise Papers" />
        </Helmet>
        <h1 className="branch-heading">
          CSE's Semester-wise Papers
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/CseSem1CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 1
            </button>
          </Link>

          <Link to={"/CseSem2CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 2
            </button>
          </Link>

          <Link to={"/CseSem3CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 3
            </button>
          </Link>

          <Link to={"/CseSem4CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 4
            </button>
          </Link>

          <Link to={"/CseSem5CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 5
            </button>
          </Link>

          <Link to={"/CseSem6CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 6
            </button>
          </Link>

          <Link to={"/CseSem7CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 7
            </button>
          </Link>

          <Link to={"/CseSem8CDLU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CseBranchCDLU;
