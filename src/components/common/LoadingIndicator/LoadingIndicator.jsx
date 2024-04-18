import React from "react";

const LoadingIndicator = ({ message, customClass }) => {
  return (
    <div className={`loading-indicator-container ${customClass || ""}`}>
      <p>{message || "Loading..."}</p>
    </div>
  );
};

export default LoadingIndicator;
