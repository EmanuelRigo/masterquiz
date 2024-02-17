import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="row mx-0 mt-5">
      <Link className="text-decoration-none navbar__title" to="/">
        <h1 className="text-center">MasterQuiz!</h1>
      </Link>
    </header>
  );
}

export default Navbar;
