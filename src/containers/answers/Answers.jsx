import React, { useState } from "react";
import "./answers.scss";
const Answers = ({ selectedQuestion }) => {
  const [isShown, setIsShown] = useState(false);

  const showAnswer = () => {
    if (!selectedQuestion.answer) {
      return "please select a category and question";
    } else if (isShown) {
      return selectedQuestion.answer;
    } else {
      return selectedQuestion.question;
    }
  };
  return (
    <div className="answers">
      <div className="answers__card">{showAnswer()}</div>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Answers;
