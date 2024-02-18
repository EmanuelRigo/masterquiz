import Results from "./Results";
import { ProgressBar, Row, Col, Button } from "react-bootstrap";
import { BsArrowThroughHeart } from "react-icons/bs";

import { useState, useEffect, useContext } from "react";
import { TbH1 } from "react-icons/tb";

import { contexto } from "./CustomProvider";

function Question({
  filteredQuestion,
  setIndexQuestion,
  indexQuestion,
  questionFiltered,
  icon,
  setActivate,
}) {
  console.log(filteredQuestion);

  const { boardGame } = useContext(contexto);

  //Funciones para barra de tiempo///
  const [numero, setNumero] = useState(0);

  function crecimientoGradual() {
    const intervalo = 30 * 1000;
    const incrementoMaximo = 100;
    const intervaloTiempo = 100;

    const incrementarNumero = () => {
      const incremento = incrementoMaximo / (intervalo / intervaloTiempo);

      setNumero((prevNumero) => {
        const nuevoNumero = prevNumero + incremento;
        return nuevoNumero > incrementoMaximo ? incrementoMaximo : nuevoNumero;
      });

      if (numero > incrementoMaximo) {
        numero = incrementoMaximo;
      }

      if (numero >= incrementoMaximo) {
        clearInterval(intervaloIncremento);
      }
    };
    const intervaloIncremento = setInterval(incrementarNumero, intervaloTiempo);
  }

  //Funciones de preguntas

  const [answersRandom, setAnswerRandom] = useState([]);
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, SetSelectAnswerIndex] = useState(null);
  const [answered, setAnsewered] = useState(false);
  const [activeResult, setActiveResult] = useState(false);

  useEffect(() => {
    const answer = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];

    setAnswerRandom(answer.sort(() => Math.random() - 0.5));

    if (!boardGame) {
      crecimientoGradual();
    }
  }, [filteredQuestion]);

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    SetSelectAnswerIndex(index);
    setAnsewered(true);
  };

  const onNextQuestions = () => {
    setIndexQuestion(indexQuestion + 1);
    SetSelectAnswerIndex(null);
    setAnsewered(false);
  };

  const onReset = () => {
    setScore(0);
    setActivate(false);
    setIndexQuestion(0);
  };

  return (
    <>
      {activeResult ? (
        <Results
          questionFiltered={questionFiltered}
          score={score}
          onReset={onReset}
        ></Results>
      ) : (
        <Row>
          <Col xs={12} className="text-center mb-4">
            <span className="text-light logo">{icon}</span>
            {boardGame ? (
              ""
            ) : (
              <span className="text-light">
                {indexQuestion + 1} / {questionFiltered.length}
              </span>
            )}
          </Col>
          <Col xs={12}>
            <p className="text-light text-center mb-4 fs-6  ">
              {filteredQuestion.question}
            </p>
          </Col>

          <Col className="mb-3" xs={12}>
            <ProgressBar now={Math.floor(numero)} />
            {boardGame ? (
              <button onClick={crecimientoGradual}>iniciar</button>
            ) : (
              ""
            )}
          </Col>
          <Col md={12} className="text-center ">
            <Row className="row-cols-1 row-cols-md-2 mx-0">
              {answersRandom.map((answer, index) => (
                <Button
                  className={`col ${
                    selectAnswerIndex !== null && index === selectAnswerIndex
                      ? answer === filteredQuestion.correct_answer
                        ? "btn-success"
                        : "btn-danger"
                      : ""
                  }`}
                  onClick={() => checkAnswer(answer, index)}
                  key={answer}
                  disabled={answered && selectAnswerIndex !== index}
                >
                  {answer}
                </Button>
              ))}
            </Row>
          </Col>

          <Col>
            {indexQuestion + 1 === questionFiltered.length ? (
              <button
                onClick={() => {
                  setAnsewered(false);
                  setActiveResult(true);
                }}
                className="btn btn-warning rounded p-2 text-dark w-100"
              >
                finalizar
              </button>
            ) : (
              <button
                onClick={onNextQuestions}
                className="btn btn-warning rounded p-2 text-dark w-100"
              >
                siguiente pregunta
              </button>
            )}

            <button
              onClick={onReset}
              className="btn btn-warning rounded p-2 text-dark w-100"
            >
              reiniciar
            </button>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Question;
