import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CeBranchCDLU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>CeBranchCDLU</title>
          <meta
            name="description"
            content="CDLU's Civil Engineering's Semester-wise Papers"
          />
        </Helmet>
        <h1 className="branch-heading">
          Civil Engineering's Semester-wise Papers
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/CeSem1CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 1
            </button>
          </Link>

          <Link to={"/CeSem2CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 2
            </button>
          </Link>

          <Link to={"/CeSem3CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 3
            </button>
          </Link>

          <Link to={"/CeSem4CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 4
            </button>
          </Link>

          <Link to={"/CeSem5CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 5
            </button>
          </Link>

          <Link to={"/CeSem6CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 6
            </button>
          </Link>

          <Link to={"/CeSem7CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 7
            </button>
          </Link>

          <Link to={"/CeSem8CDLU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CeBranchCDLU;
