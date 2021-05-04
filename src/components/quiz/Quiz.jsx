import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { FaHome } from "react-icons/fa"

import "./Quiz.css";

const Quiz = () => {

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [questionCounter, setQuestionCounter] = useState(1);

    let btns = document.getElementsByClassName("optionBtn");
    const d = new Date();
    var minutes;
    var lastQuestion;

    if (d.getMinutes() < 10) {
        minutes = "0" + d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

    //when answer is chosed - disable next question btn
    //timer for quiz - when timer reach 0 end screen appear
    useEffect(() => {
        if (optionChosen === "") {
            document.getElementById('nextBtn').setAttribute("disabled", "disabled");
        } else {
            document.getElementById('nextBtn').removeAttribute("disabled", "disabled");
        }
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (timer == 0) {
            setGameState("end");
        }
        return () => clearInterval(timer);
    }, [counter])

    //functionality for the next question
    const nextQuestion = () => {
        //show new background image
        document.getElementById("app").style.backgroundImage = "url('" + questions[currQuestion].img + "')";
        //disable next question btn
        setOptionChosen("");

        //if user answered correctly increase score so we can keep track how many correct answers user had
        //change colors of the answers - green if it is correct, red if it is wrong
        if (questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
            document.getElementById('btn-' + questions[currQuestion].answer).style.color = "#008c23";
            document.getElementById('btn-' + questions[currQuestion].answer).style.borderColor = "#008c23";
        } else {
            document.getElementById('btn-' + optionChosen).style.color = "#FF5B52";
            document.getElementById('btn-' + optionChosen).style.borderColor = "#FF5B52";
            document.getElementById('btn-' + questions[currQuestion].answer).style.color = "#51C22A";
            document.getElementById('btn-' + questions[currQuestion].answer).style.borderColor = "#51C22A";
        }

        //if questionCounter is less then 10 - show next question + increase questionCounter
        if (questionCounter < 10) {
            setTimeout(function () {

                setCurrQuestion(currQuestion + 1);
                setQuestionCounter(questionCounter + 1);

                //remove background image
                document.getElementById("app").style.backgroundImage = "url('')";

                //remove styles from buttons
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.color = "#E6C027";
                    btns[i].style.background = "transparent";
                    btns[i].style.borderColor = "#E6C027";
                }
            }, 4000)
        //else if it is bigger - show end screen
        } else {
            setTimeout(function () {
                document.getElementById("app").style.backgroundImage = "url('')";
                //when user answer on question number 10 we render end component
                if (questionCounter == 10) {
                    setGameState("end");
                }
            }, 4000)
        }
    }

    //restart quiz - go back to main screen, set score to 0 and counter to 240 seconds
    const restartQuiz = () => {
        setScore(0);
        setCounter(240);
        setGameState("main");
    }

    //if we reached last question change path for next question from /Question_? to /End
    if(questionCounter<10) {
        lastQuestion = `Question_${questionCounter+1}`;
    } else {
        lastQuestion = "End";
    }

    return <div className="Quiz fadeIn delay-0_3">
        <div className="terminal-wrapper">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle ">
                    </div>
                    <div className="yellow circle">
                    </div>
                    {/* Hint for one of the questions */}
                    <a href="https://preview.redd.it/0zw17rx7z1541.jpg?auto=webp&s=31eac5c8e060c596ba0fdd3944857a7145b6894c" className="green circle" target="_blank">
                    </a>
                </div>
                <div className="top-mid">
                    <div className="house ">
                        <FaHome />
                    </div>
                    {/* Show correct path of question */}
                    <span className="">root@fsociety:~/Mr_Robot/Quiz/Question_{questionCounter}</span>
                </div>
                {/* Show timer in top-right */}
                <div className="top-right" style={{color: counter < 11 && '#FF5B52'}}>
                    {counter}
                </div>
            </div>
            <div id="terminal-wrapper" className="terminal-bot">
                <p className="terminal-prompt last-login">
                    -!- friend_ [friend_@10.3.2.169] has started quiz #fsociety.
                </p>
                {/* User score */}
                <p className="terminal-prompt mt-25 last-login"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> your score is: {score}/10</p>
                {/* Timer */}
                <p className="terminal-prompt last-login"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> your time is: <span style={{color: counter < 11 && '#FF5B52'}}>{counter}</span></p>
                {/* Hint */}
                <p className="terminal-prompt mt-25 terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} {"<"}mr. robot{">"}</span> {questions[currQuestion].hint} </p>
                {/* Question */}
                <p className="mt-25 terminal-prompt"><span className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/Question_{questionCounter}{">"}</span> {questions[currQuestion].question}</p>
                {/* Option A */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_A{">"}</p>
                    <button id="btn-a" onClick={() => { setOptionChosen("a"); }} className="optionBtn option-transition">{questions[currQuestion].optionA}</button>
                </div>
                {/* Option B */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_B{">"}</p>
                    <button id="btn-b" onClick={() => { setOptionChosen("b"); }} className="optionBtn option-transition">{questions[currQuestion].optionB}</button>
                </div>
                {/* Option C */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_C{">"}</p>
                    <button id="btn-c" onClick={() => { setOptionChosen("c"); }} className="optionBtn option-transition">{questions[currQuestion].optionC}</button>
                </div>
                {/* Option D */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/Question_{questionCounter}/Option_D{">"}</p>
                    <button id="btn-d" onClick={() => { setOptionChosen("d"); }} className="optionBtn option-transition">{questions[currQuestion].optionD}</button>
                </div>
                {/* Next question button */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/{lastQuestion}{">"}</p>
                    {/* Change next button text when we reach last question */}
                    <button id="nextBtn" onClick={() => { nextQuestion(); }} className="startBtn button-transition"> {questionCounter < 10 ? 'Next question' : 'End quiz'}</button>
                </div>
                {/* Give up button */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green">root@fsociety:~/Mr_Robot/Quiz/Give_Up{">"}</p>
                    <button id="giveUpBtn" onClick={() => { restartQuiz(); }} className="giveUpBtn giveUp-transition">Give up</button>
                </div>
                {/* Hidden hint for one of the questions */}
                <div className="queens">
                    <p>Hello friend. You finnaly found me -{">"} https://queensmuseum.org/</p>
                </div>
            </div>
        </div>
    </div>
}

export default Quiz;