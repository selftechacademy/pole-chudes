import React from "react";
import PropTypes from "prop-types";

const Categories = ({ categories, onCategoryChange }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onCategoryChange(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
