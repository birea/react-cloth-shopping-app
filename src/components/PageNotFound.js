import React from "react";
import errorImg from "../../src/error.jpg";

const PageNotFound = () => {
  return (
    <div className="error-content center">
      <h2 className="page-title center red-text">Page Not Found</h2>

      <img className="error-img" src={errorImg} alt="error-img" />
    </div>
  );
};

export default PageNotFound;
