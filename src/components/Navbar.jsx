import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link className="text-decoration-none navbar__title" to="/">
        <h1 className="navbar pt-5">MasterQuiz!</h1>
      </Link>
    </header>
  );
}

export default Navbar;
