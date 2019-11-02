import React from "react";

const Twitter = ({ quote }) => {
  return (
    <div>
      <a
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${quote}&hashtags=MateuszBukowski`
        )}
        id="tweet"
        className="btn"
      >
        <i className="fab fa-twitter-square" /> Tweet It
      </a>
    </div>
  );
};

export default Twitter;
