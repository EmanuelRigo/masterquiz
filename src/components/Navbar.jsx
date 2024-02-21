import React from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function Navbar() {
  const { onBoardGame } = useContext(contexto);
  return (
    <header className="row mx-0 mt-5">
      <Link
        to="/"
        onClick={() => {
          onBoardGame(false);
        }}
        className="text-decoration-none navbar__title"
      >
        <h1 className="text-center my-0">MasterQuiz!</h1>
      </Link>
    </header>
  );
}

export default Navbar;
