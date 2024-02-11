import React from "react";
import { Link } from "react-router-dom";
import "category"Card from "./"category"Card";

function "category"List() {
  let algo = "algo";
  return (
    <div>
      "category"List
      <Link to={`/"category"/${algo}`}>
        <div>
          <h3>{algo}</h3>
          <"category"Card></"category"Card>
        </div>
        <h2>{algo}</h2>
      </Link>
    </div>
  );
}

export default "category"List;
