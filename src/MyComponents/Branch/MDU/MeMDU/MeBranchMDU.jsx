import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MeBranchMDU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>MeBranchMDU</title>
          <meta
            name="description"
            content="MDU's Mechanical Engineering's Semester-wise Papers"
          />
        </Helmet>
        <h1 className="branch-heading">
          Mechanical Engineering's Semester-wise Papers
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/MeSem1MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 1
            </button>
          </Link>

          <Link to={"/MeSem2MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 2
            </button>
          </Link>

          <Link to={"/MeSem3MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 3
            </button>
          </Link>

          <Link to={"/MeSem4MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 4
            </button>
          </Link>

          <Link to={"/MeSem5MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 5
            </button>
          </Link>

          <Link to={"/MeSem6MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 6
            </button>
          </Link>

          <Link to={"/MeSem7MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 7
            </button>
          </Link>

          <Link to={"/MeSem8MDU"}>
            <button type="button" className="btn btn-outline-danger">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeBranchMDU;
