import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



const CseBranchMDU = () => {



  return (
    <div className="wrapper">
      <div className="branch-container">
        <Helmet>
          <title>CseBranchMDU</title>
          <meta name="description" content="MDU's CSE's Semester-wise Papers" />
        </Helmet>
        <h1 className="branch-heading">
          CSE's Semester-wise Papers
        </h1>
        </div>
        <div className="branch-container">
        <div className="sem">
          <Link to={"/CseSem1MDU"}>
            <button type="button" className="btn">
              Semester 1
            </button>
          </Link>

          <Link to="/coming-soon">
            <button type="button" className="btn" >
              Semester 2
            </button>
          </Link>

          <Link to={"/CseSem3MDU"}>
            <button type="button" className="btn">
              Semester 3
            </button>
          </Link>

          <Link to={"/CseSem4MDU"}>
            <button type="button" className="btn">
              Semester 4
            </button>
          </Link>

          <Link to={"/CseSem5MDU"}>
            <button type="button" className="btn">
              Semester 5
            </button>
          </Link>

          <Link to={"/CseSem6MDU"}>
            <button type="button" className="btn">
              Semester 6
            </button>
          </Link>

          <Link to={"/CseSem7MDU"}>
            <button type="button" className="btn">
              Semester 7
            </button>
          </Link>

          <Link to={"/CseSem8MDU"}>
            <button type="button" className="btn">
              Semester 8
            </button>
          </Link>
          <h1>
            
          </h1>
        </div>


      </div>
    </div>
  );
};

export default CseBranchMDU;
