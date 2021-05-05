import React, {useState} from "react";
import Main from "./components/main/Main";
import Quiz from "./components/quiz/Quiz";
import End from "./components/end/End";
import {QuizContext} from './helpers/Contexts';

import './App.css';

const App = () => {

  {/* States */}
  const [counter, setCounter] = useState(240);
  const [questions, setQuestions] = useState();
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  {/* When we change gameState - render different component */}
  return <div className="App" id="app">
    <QuizContext.Provider value={{gameState, setGameState, score, setScore, questions, setQuestions, counter, setCounter}}>
      {gameState === "main" && <Main/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "end" && <End/>}
    </QuizContext.Provider>
  </div>
}

export default App;
