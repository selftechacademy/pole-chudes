import React from "react";
import { cssQuestions } from "../questionsSelector/data/cssQuestions";
import { htmlQuestions } from "../questionsSelector/data/htmlQuestions";
import CategoriesCard from "../../components/categoriesCard/CategoriesCard";
import "./categoriesSelector.scss";

const categories = ["html", "css"];

const QuestionsSelector = ({
  onCategoryChange,
  onQuestionChange,
  selectedCategory,
  selectedQuestion,
}) => {
  return (
    <div>
      <CategoriesCard
        categories={categories}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
};

export default QuestionsSelector;
