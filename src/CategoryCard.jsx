import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category}`}>
      <div className="categorycard">{category}</div>
    </Link>
  );
}

export default CategoryCard;
