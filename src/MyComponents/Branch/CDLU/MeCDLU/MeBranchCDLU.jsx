import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MeBranchCDLU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>MeBranchCDLU</title>
          <meta name="description" content="CDLU's Mechanical Engineering's Semester-wise Papers" />
        </Helmet>
        <h1 className="branch-heading">
          Mechanical Engineering's Semester-wise Papers
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/MeSem1CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 1
            </button>
          </Link>

          <Link to={"/MeSem2CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 2
            </button>
          </Link>

          <Link to={"/MeSem3CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 3
            </button>
          </Link>

          <Link to={"/MeSem4CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 4
            </button>
          </Link>

          <Link to={"/MeSem5CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 5
            </button>
          </Link>

          <Link to={"/MeSem6CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 6
            </button>
          </Link>

          <Link to={"/MeSem7CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 7
            </button>
          </Link>

          <Link to={"/MeSem8CDLU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeBranchCDLU;
