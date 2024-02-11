import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link className="text-decoration-none navbar__title" to="/">
        MasterQuiz!
      </Link>
    </header>
  );
}

export default Navbar;
