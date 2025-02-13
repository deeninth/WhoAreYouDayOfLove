import React from "react";
import Nlove from '../images/Nlove.png';
import "../styles/question.css"

function Question({ question, options, onAnswer, selectedAnswer }) {
  return (
    <div className="question-page">
      <a href="https://deeninth.github.io/WhoAreYouDayOfLove/"><img src={Nlove} alt=""/></a>

      <h1>{question}</h1>
      {options.map((option, index) => (
        <button key={index} 
                onClick={() => onAnswer(option.drink)}
                className={selectedAnswer === option.drink ? "selected" : ""}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
