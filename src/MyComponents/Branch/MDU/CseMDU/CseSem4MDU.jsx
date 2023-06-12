import React from "react";
import { Helmet } from "react-helmet";
import "../../Style/Branch.css";

const CseSem4MDU = () => {
  return (
    <>
      <div className="wrapper">
        <div className="branch-container">
          <Helmet>
            <title>CseBranchMDU</title>
            <meta
              name="description"
              content="MDU's CSE's Semester-wise Papers"
            />
          </Helmet>
          <h1 className="branch-heading">SEMESTER 4</h1>
        </div>
        <div className="branch-container">
       

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Math
                </button>
              </h2>
              <div
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" id="sub">
                  <div className="button-container">
                    <a
                      href="https://shrinke.me/cse_sem4_math"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2021
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Organisation Behav
                </button>
              </h2>
              <div
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" id="sub">
                  <div className="button-container">
                    <a
                      href="https://shrinke.me/cse_sem4_ob"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2021
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Oops
                </button>
              </h2>
              <div
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" id="sub">
                  <div className="button-container">
                    <a
                      href="https://shrinke.me/cse_sem4_oops"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2021
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Operating System
                </button>
              </h2>
              <div
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" id="sub">
                  <div className="button-container">
                    <a
                      href="https://shrinke.me/cse_sem4_os"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2021
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Web Dev
                </button>
              </h2>
              <div
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" id="sub">
                  <div className="button-container">
                    <a
                      href="https://shrinke.me/cse_sem4_web"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2021
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>


    </>
  );
};

export default CseSem4MDU;
