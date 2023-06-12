import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CeBranchMDU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>CeBranchMDU</title>
          <meta
            name="description"
            content="MDU's Civil Engineering's Semester-wise Papers"
          />
        </Helmet>
        <h1 className="branch-heading">
          Civil Engineering's Semester-wise Papers
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/CeSem1MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 1
            </button>
          </Link>

          <Link to={"/CeSem2MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 2
            </button>
          </Link>

          <Link to={"/CeSem3MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 3
            </button>
          </Link>

          <Link to={"/CeSem4MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 4
            </button>
          </Link>

          <Link to={"/CeSem5MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 5
            </button>
          </Link>

          <Link to={"/CeSem6MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 6
            </button>
          </Link>

          <Link to={"/CeSem7MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 7
            </button>
          </Link>

          <Link to={"/CeSem8MDU"}>
            <button type="button" className="btn btn-outline-info">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CeBranchMDU;
