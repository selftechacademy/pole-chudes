import React, { useState } from "react";
import CategoriesSelector from "./containers/categoriesSelector/CategoriesSelector";
import Answers from "./containers/answers/Answers";
import "./App.scss";
import QuestionsSelector from "./containers/questionsSelector/QuestionsSelector";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const onQuestionChange = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="container">
      <div className="game-board">
        <div className="game-board__questions">
          {!selectedCategory ? (
            <CategoriesSelector
              selectedCategory={selectedCategory}
              selectedQuestion={selectedQuestion}
              onCategoryChange={onCategoryChange}
              onQuestionChange={onQuestionChange}
            />
          ) : (
            <QuestionsSelector
              selectedQuestion={selectedQuestion}
              selectedCategory={selectedCategory}
              onQuestionChange={onQuestionChange}
            />
          )}
        </div>
        <div className="game-board__answers">
          <Answers selectedQuestion={selectedQuestion} />
        </div>
      </div>
    </div>
  );
}

export default App;
