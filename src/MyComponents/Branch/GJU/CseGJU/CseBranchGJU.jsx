import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CseBranchGJU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>CseBranchGJU</title>
          <meta name="description" content="GJU's CSE's Semester-wise Papers" />
        </Helmet>
        <h1 className="branch-heading">
          CSE's Semester-wise Papers
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/CseSem1GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 1
            </button>
          </Link>

          <Link to={"/CseSem2GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 2
            </button>
          </Link>

          <Link to={"/CseSem3GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 3
            </button>
          </Link>

          <Link to={"/CseSem4GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 4
            </button>
          </Link>

          <Link to={"/CseSem5GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 5
            </button>
          </Link>

          <Link to={"/CseSem6GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 6
            </button>
          </Link>

          <Link to={"/CseSem7GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 7
            </button>
          </Link>

          <Link to={"/CseSem8GJU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CseBranchGJU;
