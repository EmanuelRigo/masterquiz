import Question from "./Question";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiLeaf } from "react-icons/ti";
import { MdOutlineScience } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { MdOutlineSportsFootball } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import data from "../questionsDB.json";

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

function CategoryPage() {
  let [activate, setActivate] = useState(false);

  const { category } = useParams();
  const [questionFiltered, SetQuestionFiltered] = useState(
    data.filter((question) => question.category === category)
  );

  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    const newQuestions = shuffleArray(questionFiltered);
    SetQuestionFiltered(newQuestions);
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
      filteredQuestions={questionFiltered[indexQuestion]}
      setIndexQuestion={setIndexQuestion}
      indexQuestion={indexQuestion}
      questionFiltered={questionFiltered}
      icon={componente}
      setActivate={setActivate}
    ></Question>
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
