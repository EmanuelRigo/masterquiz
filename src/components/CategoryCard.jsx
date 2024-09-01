import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, icon, alt }) {
  return (
    <Link className="btn btn-warning p-2 p-md-4 " to={`/category/${category}`}>
      <div className="categorycard">{icon}</div>
    </Link>
  );
}

export default CategoryCard;
