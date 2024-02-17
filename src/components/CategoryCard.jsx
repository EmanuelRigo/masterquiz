import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, icon, alt }) {
  return (
    <Link className="text-decoration-none" to={`/category/${category}`}>
      <div className="categorycard btn btn-warning">{icon}</div>
    </Link>
  );
}

export default CategoryCard;
