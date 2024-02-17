import React from "react";
import CategoryCard from "./CategoryCard";
import { Row, Col } from "react-bootstrap";
import { TiLeaf } from "react-icons/ti";
import { MdOutlineScience } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { MdOutlineSportsFootball } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";

function CategoryList() {
  return (
    <Row className="row-cols-2 row-cols-md-3">
      <Col className="d-flex justify-content-center py-3">
        <CategoryCard
          className="btn btn-warning"
          icon={<MdOutlineScience />}
          category={"ciencia"}
        ></CategoryCard>
      </Col>
      <Col className="d-flex justify-content-center py-3">
        <CategoryCard
          icon={<TbMovie />}
          category={"espectaculo"}
        ></CategoryCard>
      </Col>
      <Col className="d-flex justify-content-center py-3">
        <CategoryCard
          icon={<BiWorld />}
          category={"historia-y-geografia"}
        ></CategoryCard>
      </Col>
      <Col className="d-flex justify-content-center py-3">
        <CategoryCard
          icon={<MdOutlineSportsFootball />}
          category={"deporte"}
        ></CategoryCard>
      </Col>
      <Col className="d-flex justify-content-center py-3">
        <CategoryCard
          icon={<IoGameControllerOutline />}
          category={"videojuegos-comics-y-anime"}
        ></CategoryCard>
      </Col>
      <Col className="d-flex justify-content-center py-3">
        <CategoryCard icon={<TiLeaf />} category={"naturaleza"}></CategoryCard>
      </Col>
    </Row>
  );
}

export default CategoryList;
