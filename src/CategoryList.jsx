import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  let algo = "algo";
  return (
    <div>
      CategoryList
      <Link to={`/category/${algo}`}>
        <div>
          <h3>{algo}</h3>
          <CategoryCard></CategoryCard>
        </div>
        <h2>{algo}</h2>
      </Link>
    </div>
  );
}

export default CategoryList;
