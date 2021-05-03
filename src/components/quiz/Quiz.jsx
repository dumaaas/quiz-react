import React , {useContext} from 'react';
import {QuizContext} from '../../helpers/Contexts';

import "./Quiz.css";

const Quiz = () => {
    const {gameState, setGameState} = useContext(QuizContext);

    return <div className="Quiz">
        <button onClick={() => {setGameState("main")}}>End Quiz</button>
    </div>
}

export default Quiz;