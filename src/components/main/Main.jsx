import React , {useContext} from 'react';
import {QuizContext} from '../../helpers/Contexts';
import {FaHome} from "react-icons/fa"

import './Main.css';

const Main = () => {
    const {gameState, setGameState} = useContext(QuizContext);

    return <div className="Main">
        <div className="terminal-wrapper">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle ">

                    </div>
                    <div className="yellow circle">

                    </div>
                    <div className="green circle">

                    </div>
                </div>
                <div className="top-mid">
                    <div className="house ">
                    <FaHome /> 
                    </div>
                   <span className="">dumaaas@console:~/React/Quiz</span>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="terminal-bot">
                <p className="terminal-prompt last-login">{">"} Last login: {Date().toLocaleString()}</p>
                <p className="terminal-prompt terminal-msg">{">"} Hello friend. You have reached your last destination. Solve this quiz and join the club of invincible developers.</p>
                <div className="terminal-prompt terminal-text">
                    <p className="mt-25 ">dumaaas@console:~/React/Quiz{">"}</p>
                    <p className="mt-25 typewriter pl-7">Hey, why don't you start?</p>
                </div>

            </div>
        </div>
        
        <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
    </div>
}

export default Main;