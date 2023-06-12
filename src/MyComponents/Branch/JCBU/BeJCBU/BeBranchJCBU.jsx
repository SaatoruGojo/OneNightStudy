import React from "react";
import "../../Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BeBranchJCBU = () => {
  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>BeBranchJCBU</title>
          <meta name="description" content="JCBU's Bio - Tech Engineering's Semester-wise Papers" />
        </Helmet>
        <h1 className="branch-heading">
          Bio - Tech Engineering's Semester-wise Papers
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>

        <div className="sem">
          <Link to={"/BeSem1JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 1
            </button>
          </Link>

          <Link to={"/BeSem2JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 2
            </button>
          </Link>

          <Link to={"/BeSem3JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 3
            </button>
          </Link>

          <Link to={"/BeSem4JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 4
            </button>
          </Link>

          <Link to={"/BeSem5JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 5
            </button>
          </Link>

          <Link to={"/BeSem6JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 6
            </button>
          </Link>

          <Link to={"/BeSem7JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 7
            </button>
          </Link>

          <Link to={"/BeSem8JCBU"}>
            <button type="button" className="btn btn-warning">
              Semester 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeBranchJCBU;
