import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BeBranchCDLU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>BeBranchCDLU</title>
          <meta
            name="description"
            content="CDLU's Bio - Tech Engineering's Semester-wise Papers"
          />
        </Helmet>
        <h1 className="branch-heading">
          Bio - Tech Engineering's Semester-wise Papers
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/BeSem1CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 1
            </button>
          </Link>

          <Link to={"/BeSem2CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 2
            </button>
          </Link>

          <Link to={"/BeSem3CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 3
            </button>
          </Link>

          <Link to={"/BeSem4CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 4
            </button>
          </Link>

          <Link to={"/BeSem5CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 5
            </button>
          </Link>

          <Link to={"/BeSem6CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 6
            </button>
          </Link>

          <Link to={"/BeSem7CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 7
            </button>
          </Link>

          <Link to={"/BeSem8CDLU"}>
            <button type="button" className="btn btn-warning">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeBranchCDLU;
