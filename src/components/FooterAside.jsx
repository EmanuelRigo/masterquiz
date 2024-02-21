import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaHouse } from "react-icons/fa6";
import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { IoDiceOutline } from "react-icons/io5";

function FooterAside() {
  const { boardGame, onBoardGame } = useContext(contexto);
  return (
    <footer className="d-flex flex-column h-md-100 justify-content-end align-items-center">
      <div className="p-2">
        <Link
          onClick={() => {
            onBoardGame(false);
          }}
          to={"/"}
        >
          <FaHouse className="icon" />
        </Link>

        {boardGame ? (
          <Link className="icon" to={"/dice"}>
            <IoDiceOutline className="icon"></IoDiceOutline>
          </Link>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
}

export default FooterAside;
