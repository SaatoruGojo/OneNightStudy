import React from "react";
import "../MyComponents/style/Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <div id="header">
        <section class="container-fluid">
          <div className="container-fluid nav_bg">
            <Helmet>
           
        <title>OneNightStudy - Free Study Resources and Notes</title>
        <meta name="description" content="OneNightStudy is a platform that provides free study resources and notes for various subjects and exams. Find comprehensive study materials and ace your exams with ease." />
        <meta name="keywords" content="One Night Study, Education Platform, Study Resources,notes, exams, subjects, education, Online Learning, Exam Preparation, Notes and Materials, Question Papers, Study Guides, Educational Resources, College and University Resources, Study Tips and Techniques, Academic Support, Online Tutoring, Learning Community, Student Resources"/>

        <meta name="robots" content="index, follow" />
      </Helmet>

          </div>
        </section>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-40 pt-5 pt-lg-0 order-2 order-lg-1">
              <h2 className="bunk-heading ">
                <strong className="brand-name"> </strong>
              </h2>
              <h1 className="bunk-heading ">
                <strong className="brand-name"> </strong>
              </h1>

              <div className="MDU"> 
                <h1 className="bunk-heading ">
                  <strong className="brand-name"> Unlock Success in a Single Night with One Night Study! &nbsp;</strong>
                  <h2> Right Place to find the MDU previous year  question Paper</h2>
                </h1>
                
                <div className="branches-name ">
                  <Link to={"/MDU"}>
                    <button className="button-63 short-button" role="button">
                      MDU
                    </button>
                  </Link>
                  <Link to={"/coming-soon"}>
                    <button className="button-63 short-button" role="button">
                      GJU
                    </button>
                  </Link>

                  <Link to={"/coming-soon"}>
                    <button className="button-63 short-button" role="button">
                      KU
                    </button>
                  </Link>

                  <Link to={"/coming-soon"}>
                    <button className="button-63 short-button" role="button">
                      YMCA
                    </button>
                  </Link>

                  <Link to={"/question"}>
                    <button className="button-63 short-button" role="button">
                      MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
<h1> </h1>

        <div class="container">
          <div class="box">
            <p>AUTHENTIC</p>
            <p>
              All records have been submitted by fellow students from your
              department.
            </p>
          </div>
          <div class="box">
            <p>CONTRIBUTE</p>
            <p>
              Every upload counts and makes a significant difference in helping
              students across various branches and colleges
            </p>
            <Link to={"/Upload"}>
            <button type="button" className="btn">
              UPLOAD
            </button>
            </Link>
          </div>
          <div class="box">
            <p>
              EDUCATIONAL MATERIAL 
              </p>
              <p>Access
              unrestricted study notes, past question papers, lecture
              recordings, and a multitude of other valuable resources, all at no
              cost!
            </p>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Home;
