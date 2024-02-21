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

  const shuffleArray = (array) => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, boardGame ? 15 : 5);
  };

  let [activate, setActivate] = useState(false);

  const { category } = useParams();
  const [questionFiltered, SetQuestionFiltered] = useState(
    data.filter((question) => question.category === category)
  );

  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    const newQuestions = shuffleArray(questionFiltered);
    SetQuestionFiltered(newQuestions);
    if (boardGame) {
      setActivate(true);
    }
  }, []);

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
      filteredQuestion={questionFiltered[indexQuestion]}
      setIndexQuestion={setIndexQuestion}
      indexQuestion={indexQuestion}
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
