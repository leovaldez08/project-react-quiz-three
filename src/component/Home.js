import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <h1>Quiz Game</h1>
      </div>
      <div className="container">
        <Link to="play">
          <button className="play-button">PLAY</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
