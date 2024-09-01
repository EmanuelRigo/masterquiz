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
    <footer className="d-flex flex-column h-100 justify-content-end align-items-center">
      <div className="p-2 w-100  d-flex flex-lg-column justify-content-around align-items-center">
        <Link
          onClick={() => {
            onBoardGame(false);
          }}
          to={"/"}
        >
          <FaHouse className="icon my-md-4" />
        </Link>

        {boardGame ? (
          <Link to={"/dice"}>
            <IoDiceOutline className="icon my-md-4"></IoDiceOutline>
          </Link>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
}

export default FooterAside;
