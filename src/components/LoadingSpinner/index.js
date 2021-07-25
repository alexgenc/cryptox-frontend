import React from "react";
import "./LoadingSpinner.css";

/** Loading message used by components that fetch API data. */

const LoadingSpinner = () => {
  return (
      <div className="lds-hourglass font-bold text-md">Loading...</div>
  );
}

export default LoadingSpinner;