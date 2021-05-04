import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { FaHome } from "react-icons/fa"
import { Questions } from "../../helpers/Questions";

import "./Quiz.css";

const Quiz = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);

    //first question is also random question
    const [currQuestion, setCurrQuestion] = useState(Math.floor(Math.random() * 20));
    const [optionChosen, setOptionChosen] = useState("");
    const [questionCounter, setQuestionCounter] = useState(1);
    const boolNext = true;
    let btns = document.getElementsByClassName("optionBtn");

    useEffect(() => {
        for(var i=0; i<btns.length; i++) {
            btns[i].style.color = "#E6C027";
            btns[i].style.background = "transparent";
        }
        if(optionChosen === "") {
            document.getElementById('nextBtn').setAttribute("disabled", "disabled");
        } else {
            document.getElementById('btn-' + optionChosen).style.color = "#fff";
            document.getElementById('btn-' + optionChosen).style.background = "#E6C027";
            document.getElementById('nextBtn').removeAttribute("disabled", "disabled");

        }
    })


    const nextQuestion = () => {
        for(var i=0; i<btns.length; i++) {
            btns[i].style.color = "#E6C027";
            btns[i].style.background = "transparent";
        }
        //if user answered correctly increase score so we can keep track how many correct answers user had
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
            console.log('btn-' + optionChosen);
            document.getElementById('btn-' + optionChosen).style.color = "#51C22A";
            document.getElementById('btn-' + optionChosen).style.borderColor = "#51C22A";
            document.getElementById('btn-' + optionChosen).style.background = "transparent";
        } else {
            document.getElementById('btn-' + optionChosen).style.color = "#FF5B52";
            document.getElementById('btn-' + optionChosen).style.borderColor = "#FF5B52";
            document.getElementById('btn-' + Questions[currQuestion].answer).style.color = "#51C22A";
            document.getElementById('btn-' + Questions[currQuestion].answer).style.borderColor = "#51C22A";

        }

        setTimeout(function () {

            document.getElementById('btn-' + optionChosen).style.color = "#E6C027";
            document.getElementById('btn-' + optionChosen).style.borderColor = "#E6C027";
            document.getElementById('btn-' + Questions[currQuestion].answer).style.color = "#E6C027";
            document.getElementById('btn-' + Questions[currQuestion].answer).style.borderColor = "#E6C027";

            //making sure to get unique random question
            let randomIndex = getRandomQuestion(0, Questions.length - 2);
            Questions.splice(randomIndex, 1);
            setCurrQuestion(randomIndex);
            setQuestionCounter(questionCounter + 1);

        }, 2000)

        //when user answer on question number 10 we render end component
        setTimeout(function () {
            if (questionCounter == 10) {
                setGameState("main");
            }
            setOptionChosen("");

        }, 2000)

        document.getElementById('nextBtn').setAttribute("disabled", "disabled");

    }

    const getRandomQuestion = (min, max) => {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }

    const restartQuiz = () => {
        setScore(0);
        setGameState("main");
    }

    return <div className="Quiz">
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
                    <span className="">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter}</span>
                </div>
                <div>

                </div>
            </div>
            <div className="terminal-bot">
                <p className="terminal-prompt last-login">{">"} Last login: {Date().toLocaleString()}</p>
                <p className="terminal-prompt last-login">{">"} Friend. Your score is: {score}/10</p>
                <p className="terminal-prompt terminal-msg">{">"} {Questions[currQuestion].hint} </p>

                <p className="mt-25 terminal-prompt">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter}{">"} {Questions[currQuestion].question}</p>


                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_A{">"}</p>
                    <button id="btn-a" onClick={() => { setOptionChosen("a"); }} className="optionBtn option-transition">{Questions[currQuestion].optionA}</button>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_B{">"}</p>
                    <button id="btn-b" onClick={() => { setOptionChosen("b"); }} className="optionBtn option-transition">{Questions[currQuestion].optionB}</button>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_C{">"}</p>
                    <button id="btn-c" onClick={() => { setOptionChosen("c"); }} className="optionBtn option-transition">{Questions[currQuestion].optionC}</button>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_D{">"}</p>
                    <button id="btn-d" onClick={() => { setOptionChosen("d"); }} className="optionBtn option-transition">{Questions[currQuestion].optionD}</button>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas:~/Mr_Robot/Quiz/Question_{questionCounter + 1}{">"}</p>
                    <button  id="nextBtn" onClick={() => { nextQuestion(); }} className="startBtn button-transition">Next question</button>
                </div>
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">dumaaas:~/Mr_Robot/Quiz/Give_Up{">"}</p>
                    <button id="giveUpBtn" onClick={() => { restartQuiz(); }} className="giveUpBtn giveUp-transition">Give up</button>
                </div>

            </div>
        </div>
    </div>
}

export default Quiz;