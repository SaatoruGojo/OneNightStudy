import React from "react";
import { Helmet } from "react-helmet";
import "../../Style/Branch.css";
const CseSem3MDU = () => {
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
          <h1 className="branch-heading">SEMESTER 3</h1>
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
                  DBMS
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
                      href="https://shrinke.me/cse_sem3_dbms"
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
                  DE
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
                      href="https://shrinke.me/cse_sem3_de"
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
                  DSA
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
                      href="https://shrinke.me/cse_sem3_dsa"
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
                  Eco
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
                      href="https://shrinke.me/cse_sem3_eco"
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
                  MATH III
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
                      href="https://shrinke.me/cse_sem3_math"
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
                  PYTHON
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
                      href="https://shrinke.me/cse_sem3_python"
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

export default CseSem3MDU;
