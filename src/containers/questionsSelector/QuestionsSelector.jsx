import React from "react";
import { cssQuestions } from "./data/cssQuestions";
import { htmlQuestions } from "./data/htmlQuestions";

import "./questionsSelector.scss";

const QuestionsSelector = ({
  selectedCategory,
  onQuestionChange,
  selectedQuestion,
}) => {
  const showQuestions = (category) => {
    switch (category) {
      case "html":
        return htmlQuestions;
      case "css":
        return cssQuestions;
      default:
        break;
    }
  };

  return (
    <div className="questions">
      <h1>Questions</h1>
      <button>Go back</button>
      <br />
      <div className="questions__container">
        {showQuestions(selectedCategory).map((question, index) => (
          <div
            className={`questions__number ${
              question.id === selectedQuestion.id
                ? "questions__number-selected"
                : ""
            }`}
            key={question}
            onClick={() => onQuestionChange(question)}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsSelector;
