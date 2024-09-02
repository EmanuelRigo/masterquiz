import Question from "./Question";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TiLeaf } from "react-icons/ti";
import { MdOutlineScience } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { MdOutlineSportsFootball } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { Button, Col, Row } from "react-bootstrap";
import data from "../questionsDB.json";
import { contexto } from "./CustomProvider";

function CategoryPage() {
  const { boardGame } = useContext(contexto);
  let [activate, setActivate] = useState(false);
  const [mix, setMix] = useState(false);
  let [indexQuestion, setIndexQuestion] = useState(0);
  const [questionShuffle, setquestionShuffle] = useState();

  // const shuffleArray = (array) => {
  //   const newArray = array.sort(() => Math.random() - 0.5);
  //   return newArray.slice(0, boardGame ? 15 : 5);
  // };

  const shuffleArray = (array) => {
    const newArray = [...array];

    // Fisher-Yates shuffle
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    // Eliminar duplicados y seleccionar los primeros únicos
    const result = newArray
      .filter((item, index) => newArray.indexOf(item) === index)
      .slice(0, boardGame ? 15 : 5);

    return result;
  };

  const { category } = useParams();
  const [questionFiltered, SetQuestionFiltered] = useState(
    data.filter((question) => question.category === category)
  );

  useEffect(() => {
    setquestionShuffle(shuffleArray(questionFiltered));
    console.log(questionFiltered);
    console.log(questionShuffle);
    if (boardGame) {
      setActivate(true);
    }
  }, [mix]);

  let componente;

  switch (category) {
    case "ciencia":
      componente = <MdOutlineScience />;
      break;
    case "espectaculo":
      componente = <TbMovie />;
      break;
    case "historia-y-geografia":
      componente = <BiWorld />;
      break;
    case "deporte":
      componente = <MdOutlineSportsFootball />;
      break;
    case "videojuegos-comics-y-anime":
      componente = <IoGameControllerOutline />;
      break;
    case "naturaleza":
      componente = <TiLeaf></TiLeaf>;
      break;
  }

  return activate ? (
    <Question
      filteredQuestion={questionShuffle[indexQuestion]}
      setIndexQuestion={setIndexQuestion}
      indexQuestion={indexQuestion}
      questionShuffle={questionShuffle}
      questionFiltered={questionFiltered}
      icon={componente}
      setActivate={setActivate}
      shuffleArray={shuffleArray}
    ></Question>
  ) : (
    <Row className=" flex-column align-items-center">
      <Col className="text-center categorypage__icon">
        <div className="text-light">{componente}</div>
      </Col>{" "}
      <Col>
        <h3 className="text-light pt-3  pb-4 text-center">
          {category.replace(/-/g, " ")}
        </h3>
      </Col>
      <Col>
        <Button
          className="btn-warning w-100 mb-3"
          onClick={() => {
            setMix(!mix);
            setActivate(true);
          }}
        >
          iniciar Quiz
        </Button>
        <Link
          to="/categorylist"
          className="btn btn-warning rounded p-2 text-dark w-100"
        >
          categorias
        </Link>
      </Col>
    </Row>
  );
}

export default CategoryPage;
