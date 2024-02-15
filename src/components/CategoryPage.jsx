import Question from "./Question";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TiLeaf } from "react-icons/ti";
import { MdOutlineScience } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { MdOutlineSportsFootball } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";

function CategoryPage() {
  let [activate, setActivate] = useState(false);

  const { category } = useParams();

  let componente;

  switch (category) {
    case "ciencia":
      componente = <MdOutlineScience />;
      break;
    case "espetaculos":
      componente = <TbMovie />;
      break;
    case "historioa-y-geografia":
      componente = <BiWorld />;
      break;
    case "deportes":
      componente = <MdOutlineSportsFootball />;
      break;
    case "videojuegos-comics-y-anime":
      componente = <IoGameControllerOutline />;
      break;
    case "naturaleza":
      componente = <TiLeaf></TiLeaf>;
      break;
  }

  console.log(category);
  return activate ? (
    <Question></Question>
  ) : (
    <>
      <h3 className="text-light">{category}</h3>
      <div className="text-light">{componente}</div>
      <Button
        className="btn-warning"
        onClick={() => {
          setActivate(true);
        }}
      >
        iniciar Quiz
      </Button>
    </>
  );
}

export default CategoryPage;