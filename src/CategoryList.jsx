import React from "react";
import CategoryCard from "./CategoryCard";
import { Row, Col } from "react-bootstrap";

function CategoryList() {
  return (
    <Row className="row-cols-2 row-cols-md-3">
      <Col className="bg-warning d-flex justify-content-center py-3">
        <CategoryCard category={"ciencia"}></CategoryCard>
      </Col>
      <Col className="bg-warning d-flex justify-content-center py-3">
        <CategoryCard category={"espetaculos"}></CategoryCard>
      </Col>
      <Col className="bg-warning d-flex justify-content-center py-3">
        <CategoryCard category={"historioa-y-geografia"}></CategoryCard>
      </Col>
      <Col className="bg-warning d-flex justify-content-center py-3">
        <CategoryCard category={"deportes"}></CategoryCard>
      </Col>
      <Col className="bg-warning d-flex justify-content-center py-3">
        <CategoryCard category={"videojuegos-comics-y-anime"}></CategoryCard>
      </Col>
      <Col className="bg-warning d-flex justify-content-center py-3">
        <CategoryCard category={"naturaleza"}></CategoryCard>
      </Col>
    </Row>
  );
}

export default "category"List;
