import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EceBranchGJU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>EceBranchGJU</title>
          <meta name="description" content="GJU's Electronics & Communications Engineering's Semester-wise Papers" />
        </Helmet>
        <h1 className="branch-heading">
          Electronics & Communications Engineering's Semester-wise Papers
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/EceSem1GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 1
            </button>
          </Link>

          <Link to={"/EceSem2GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 2
            </button>
          </Link>

          <Link to={"/EceSem3GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 3
            </button>
          </Link>

          <Link to={"/EceSem4GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 4
            </button>
          </Link>

          <Link to={"/EceSem5GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 5
            </button>
          </Link>

          <Link to={"/EceSem6GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 6
            </button>
          </Link>

          <Link to={"/EceSem7GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 7
            </button>
          </Link>

          <Link to={"/EceSem8GJU"}>
            <button type="button" className="btn btn-outline-success">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EceBranchGJU;
