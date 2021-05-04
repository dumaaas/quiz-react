import React, { useContext } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { FaHome } from "react-icons/fa"

import './Main.css';

const Main = () => {
    const { gameState, setGameState } = useContext(QuizContext);

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
                    <span className="">dumaaas@console:~/Mr_Robot/Quiz</span>
                </div>
                <div>

                </div>
            </div>
            <div className="terminal-bot">
                <p className="terminal-prompt last-login">{">"} Last login: {Date().toLocaleString()}</p>
                <p className="terminal-prompt terminal-msg">{">"} Hello friend. You have reached your last destination. Solve this quiz and join the club of invincible developers.</p>
                <div className="mt-25 terminal-prompt terminal-text">
                    <p>dumaaas@console:~/Mr_Robot/Quiz{">"}</p>
                    <p className="typewriter pl-7">Hey, why don't you start?</p>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas@console:~/Mr_Robot/Quiz{">"}</p>
                    <button onClick={() => { setGameState("quiz"); }} className="startBtn button-transition">Start</button>
                </div>

            </div>
        </div>
    </div>
}

export default Main;