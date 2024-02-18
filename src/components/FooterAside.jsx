import React from "react";
import { Row, Col } from "react-bootstrap";
import { GrReturn } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function FooterAside() {
  const { boardGame } = useContext(contexto);
  return (
    <footer className="d-flex flex-column h-md-100 justify-content-end align-items-center">
      <div className="p-2">
        <FaHouse className="icon" />
        <GrReturn className="icon" />
        {boardGame ? "cubo" : ""}
      </div>
    </footer>
  );
}

export default FooterAside;
