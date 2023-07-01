import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Result from "./component/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/play" element={<Quiz />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
}

export default App;
