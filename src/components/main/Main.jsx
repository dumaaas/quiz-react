import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { FaHome } from "react-icons/fa"
import { Questions } from "../../helpers/Questions";

import './Main.css';

const Main = () => {

    const shuffled = Questions.sort(() => 0.5 - Math.random());
    let questionsArray = shuffled.slice(0, 10);

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);

    useEffect(() => {

        setQuestions(questionsArray);

    })

    const d = new Date();
    var minutes;
    if(d.getMinutes()<10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }
    return <div className="Main">
        <div className="terminal-wrapper fadeIn">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle delay-0_5 fadeIn">

                    </div>
                    <div className="yellow circle delay-0_7 fadeIn">

                    </div>
                    <div className="green circle delay-0_9 fadeIn">

                    </div>
                </div>
                <div className="top-mid delay-1_3 fadeIn">
                    <div className="house ">
                        <FaHome />
                    </div>
                    <span className="">root@fsociety@:~/Mr_Robot/Quiz</span>
                </div>
                <div>

                </div>
            </div>
            <div className="terminal-bot">
                <p className="terminal-prompt last-login fadeIn delay-2">-!- friend_ [friend_@10.3.2.169] has joined #fsociety.</p>
                <p className="terminal-prompt mt-25 fadeIn delay-2_5"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> hello, friend</p>
                <p className="terminal-prompt fadeIn delay-3"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> welcome to the end.</p>
                <p className="terminal-prompt fadeIn delay-3_5"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> we've come a long way.</p>
                <p className="terminal-prompt fadeIn delay-4"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> the final challenge lies ahead</p>
                <p className="terminal-prompt fadeIn delay-4_5"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> it's time to finish what we started.</p>

                <div className="mt-25 terminal-prompt terminal-text fadeIn delay-5">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz{">"}</p>
                    <p className="typewriter pl-7">Hey, why don't you start?</p>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green fadeIn delay-10">root@fsociety:~/Mr_Robot/Quiz{">"}</p>
                    <button onClick={() => { setGameState("quiz"); }} className="fadeIn delay-10_5 startBtn button-transition">Start</button>
                </div>

            </div>
        </div>
    </div>
}

export default Main;