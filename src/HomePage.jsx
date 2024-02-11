import React from "react";
import CategoryPage from "./CategoryPage";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <Row className="w-100">
      <Col md={6} className="text-center my-3">
        <Link to="/infogame" className="btn btn-warning w-50 p-3">
          un jugagador
        </Link>
      </Col>
      <Col md={6} className="text-center  my-3">
        <Link
          to="/infogame"
          onClick={() => {
            alert("hola");
          }}
          className="btn btn-warning w-50 p-3"
        >
          juego de mesa
        </Link>
      </Col>
    </Row>
  );
}

export default HomePage;
