import React from "react";
import "./style/Question.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Question = () => {
  return (
    <div className="wrapper">
      <div className="question-container">
        <Helmet>
          <title>Select Your College - Bunk4Study</title>
          <meta
            name="description"
            content="Question paper related to college exams"
          />
        </Helmet>

        <h1 className="question-heading">
          <b>Select Your College</b>
        
        </h1>
        <div className="branch-container">
          <Link to={"/MDU"}>
            <button type="button" className="btn">
              Maharshi Dayanand University
            </button>
          </Link>

          <Link to={"/coming-soon"}>
            <button type="button" className="btn">
              Deenbandhu Chhotu Ram University
            </button>
          </Link>

          <Link to={"/coming-soon"}>
            <button type="button" className="btn">
              Guru Jambheshwar University
            </button>
          </Link>
          <Link to={"/coming-soon"}>
            <button type="button" className="btn">
              J.C. Bose University
            </button>
          </Link>

          <Link to={"/coming-soon"}>
            <button type="button" className="btn">
              Chaudhary Devi Lal University
            </button>
          </Link>

          <Link to={"/coming-soon"}>
            <button type="button" className="btn">
              Kurukshetra University
            </button>
          </Link>
          <br/>
        
        </div>
      </div>
   


    

   
      <footer className="footer">
        <h3>Latest Update</h3>
        <p>Right Now Only MDU Paper are Available</p>
        <p>Click On your college to contribute On website</p>
      </footer>
    </div>
  );
};

export default Question;
