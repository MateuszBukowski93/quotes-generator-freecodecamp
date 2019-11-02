import React from "react";

const Button = ({getRandomQuote}) => {
  return (
    <div>
      <button id="new-quote" className="btn" onClick={getRandomQuote}>
        new Quote
      </button>
    </div>
  );
};

export default Button;
