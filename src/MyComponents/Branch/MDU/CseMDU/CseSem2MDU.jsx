import React from "react";

const CseSem2MDU = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className="mb-1 branch-heading">
          SEMESTER 2 <br />
          
          
        </h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              MATH - I (Calculus and Matrices)
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
                  href="https://shrinke.me/cse_sem1_math"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn-primary">
                    2021
                  </button>
                </a>
                <a
                  href="https://shrinke.me/cse_sem1_math2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn-primary">
                    2021-2
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CseSem2MDU;
