import React from "react";
import { Helmet } from "react-helmet";
import ComingSoon from "./../../../ComingSoon.jsx";




const CseSem8MDU = () => {
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
                  BDA
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
                      href="https://shrinke.me/cse_sem8_bda"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2023
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
                  ML
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
                      href="https://shrinke.me/cse_sem8_ml"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2023
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
                  Traffic
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
                      href="https://shrinke.me/cse_sem8_te"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary">
                        2023
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

export default CseSem8MDU;
