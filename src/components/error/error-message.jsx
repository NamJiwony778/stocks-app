import React from "react";

const ErrorMessage = (props) => {
  return (
    <div className="loading-message-container">
      <span>Error: {props}</span>
    </div>
  );
};

export default ErrorMessage;
