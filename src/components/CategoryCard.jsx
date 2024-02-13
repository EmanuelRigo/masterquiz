import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, icon }) {
  return (
    <Link className="text-decoration-none " to={`/category/${category}`}>
      <div className="categorycard btn btn-warning">
        {icon}
        {/*  <p className="display-6">{category}</p> */}
      </div>
    </Link>
  );
}

export default CategoryCard;
