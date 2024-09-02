import React, { useContext } from "react";
import CategoryPage from "./CategoryPage";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { contexto } from "./CustomProvider";

function HomePage() {
  const { setBoardGame, onBoardGame } = useContext(contexto);
  return (
    <Row className="mx-0 w-100">
      <Col md={6} className="text-center my-3">
        <Link
          to="/infogame"
          onClick={() => {
            onBoardGame(false);
          }}
          className="btn btn-warning w-50 p-3"
        >
          Un Jugador
        </Link>
      </Col>
      <Col md={6} className="text-center  my-3">
        <Link
          to="/infogame"
          onClick={() => {
            onBoardGame(true);
          }}
          className="btn btn-warning w-50 p-3"
        >
          Juego de mesa
        </Link>
      </Col>
    </Row>
  );
}

export default HomePage;
