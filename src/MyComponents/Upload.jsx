import React from "react";
import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <div className="wrapper">
      <h1 className="question-heading"> Become an integral part of our mission to support and empower fellow students on their educational journey.</h1>
      <p style={{ fontSize: "24px", color: "Blue" }}>
        Your valuable contributions will help thousands of students find the
        materials they need, saving them precious time and effort. Whether you
        have question papers from previous exams, well-organized notes, or study
        materials for specific courses, we encourage you to share them with the
        OneNightStudy community.
      </p>
      <a href="https://forms.gle/5pJaeWrGf5xm8KCd8"
        target="_blank"
        rel="noopener noreferrer">
            <button type="button" className="btn">
              UPLOAD
            </button>
          </a>
        <h1>

        </h1>
    </div>
  );
};

export default Upload;
