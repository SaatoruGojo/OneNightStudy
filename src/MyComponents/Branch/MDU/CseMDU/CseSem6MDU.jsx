import React from "react";
import { Helmet } from "react-helmet";
const CseSem6MDU = () => {
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
          <h1 className="branch-heading">SEMESTER 6</h1>
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
                  DS
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
                      href="https://shrinke.me/cse_sem5_DS"
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
                  MWC
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
                      href="https://shrinke.me/cse_sem5_MWC"
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
                  CD
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
                      href="https://shrinke.me/cse_sem5_CD"
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
                  ADBMS
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
                      href="https://shrinke.me/cse_sem5_Adbms"
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
                  AI
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
                      href="https://shrinke.me/cse_sem5_AI"
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

export default CseSem6MDU;
