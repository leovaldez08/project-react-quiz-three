import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Result.css";

const Result = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const score = queryParams.get("score");

  useEffect(() => {}, [score]);

  return (
    <div className="main">
      <div className="result">
        <div>Final Results</div>
        <div>
          {score} out of 15 correct - {((score / 15) * 100).toFixed(2)}%
        </div>
        <div className="final">
          <Link to="/play">
            <button>Restart</button>
          </Link>
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
