import React, {useState, useContext} from "react";

import Main from "./components/main/Main";
import Quiz from "./components/quiz/Quiz";
import End from "./components/end/End";
import {QuizContext} from './helpers/Contexts';

import './App.css';

const App = () => {
  const [gameState, setGameState] = useState("main");

  return <div className="App">
    <QuizContext.Provider value={{gameState, setGameState}}>
      {gameState === "main" && <Main/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "end" && <End/>}
    </QuizContext.Provider>

  </div>
}

export default App;
