import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EeBranchMDU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>EeBranchMDU</title>
          <meta
            name="description"
            content="MDU's Electrical Engineering's Semester-wise Papers"
          />
        </Helmet>
        <h1 className="branch-heading">
          Electrical Engineering's Semester-wise Papers
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/EeSem1MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 1
            </button>
          </Link>

          <Link to={"/EeSem2MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 2
            </button>
          </Link>

          <Link to={"/EeSem3MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 3
            </button>
          </Link>

          <Link to={"/EeSem4MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 4
            </button>
          </Link>

          <Link to={"/EeSem5MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 5
            </button>
          </Link>

          <Link to={"/EeSem6MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 6
            </button>
          </Link>

          <Link to={"/EeSem7MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 7
            </button>
          </Link>

          <Link to={"/EeSem8MDU"}>
            <button type="button" className="btn btn-outline-secondary">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EeBranchMDU;
