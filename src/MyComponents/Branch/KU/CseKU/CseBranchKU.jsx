import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CseBranchKU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>CseBranchKU</title>
          <meta
            name="description"
            content="KU's CSE's Semester-wise Papers"
          />
        </Helmet>
        <h1 className="branch-heading">
          CSE's Semester-wise Papers
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/CseSem1KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 1
            </button>
          </Link>

          <Link to={"/CseSem2KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 2
            </button>
          </Link>

          <Link to={"/CseSem3KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 3
            </button>
          </Link>

          <Link to={"/CseSem4KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 4
            </button>
          </Link>

          <Link to={"/CseSem5KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 5
            </button>
          </Link>

          <Link to={"/CseSem6KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 6
            </button>
          </Link>

          <Link to={"/CseSem7KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 7
            </button>
          </Link>

          <Link to={"/CseSem8KU"}>
            <button type="button" className="btn btn-outline-primary">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CseBranchKU;
