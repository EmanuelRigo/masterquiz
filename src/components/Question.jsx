import Results from "./Results";
import { ProgressBar, Row, Col, Button } from "react-bootstrap";
import { BsArrowThroughHeart } from "react-icons/bs";

import { useState, useEffect, useContext, useRef } from "react";
import { TbH1 } from "react-icons/tb";

import { contexto } from "./CustomProvider";
import { Link } from "react-router-dom";

import { HiOutlinePlayCircle } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";

function Question({
  filteredQuestion,
  setIndexQuestion,
  indexQuestion,
  questionFiltered,
  icon,
  setActivate,
  shuffleArray,
}) {
  console.log(filteredQuestion);

  const { boardGame } = useContext(contexto);

  //Funciones para barra de tiempo///
  let [numero, setNumero] = useState(0);

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

  //Funcion de tiempo 2 ////
  const [contador, setContador] = useState(0);

  /*   function ejecutarContador() {
    function incrementarContador() {
      setContador(contador + 1);
      console.log("El contador es ahora: " + contador);

      if (contador >= 100) {
        clearInterval(intervalo);
      }
    }

    const intervalo = setInterval(incrementarContador, 300);
  } */

  const intervaloRef = useRef(null);

  function ejecutarContador() {
    if (intervaloRef.current === null) {
      intervaloRef.current = setInterval(() => {
        setContador((prevContador) => {
          const nuevoContador = prevContador + 1;
          console.log("El contador es ahora: " + nuevoContador);
          if (nuevoContador >= 100) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
          }
          return nuevoContador;
        });
      }, 300);
    }
  }

  function detenerContador() {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  }
  /*   function ejecutarContador() {
    const intervalo = setInterval(() => {
      setContador((prevContador) => {
        const nuevoContador = prevContador + 1;
        console.log("El contador es ahora: " + nuevoContador);
        if (nuevoContador > 98) {
          clearInterval(intervalo);
        }
        return nuevoContador;
      });
    }, 300);
  } */

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
      //crecimientoGradual();
      ejecutarContador();
    }
  }, [filteredQuestion]);

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    SetSelectAnswerIndex(index);
    setAnsewered(true);
    detenerContador();
  };

  const onNextQuestions = () => {
    setIndexQuestion(indexQuestion + 1);
    SetSelectAnswerIndex(null);
    setAnsewered(false);
    setContador(0);
    if (boardGame) {
      detenerContador();
    }
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
            <ProgressBar now={contador} />
            {boardGame ? (
              <Col
                xs={3}
                className="rounded mx-auto mt-4 mb-2 bg-warning p-3 text-center"
              >
                <FaPlay
                  onClick={ejecutarContador}
                  className="logo fs-1"
                ></FaPlay>
              </Col>
            ) : (
              ""
            )}
          </Col>
          <Col md={12} className="text-center ">
            <Row className="row-cols-2  row-cols-md-2 mx-0 mb-3">
              {answersRandom.map((answer, index) => (
                <Col className="p-1">
                  <Button
                    size="sm"
                    style={{
                      height: "auto",
                      paddingTop: "1.5rem",
                      paddingBottom: "1.5rem",
                    }}
                    className={`w-100 h-100 py-2 ${
                      selectAnswerIndex !== null && index === selectAnswerIndex
                        ? answer === filteredQuestion.correct_answer
                          ? "btn-success"
                          : "btn-danger"
                        : ""
                    }`}
                    onClick={() => checkAnswer(answer, index)}
                    key={answer}
                    disabled={
                      (answered && selectAnswerIndex !== index) ||
                      contador == 100
                    }
                  >
                    {answer}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>

          <Col>
            {boardGame ? (
              indexQuestion + 1 === questionFiltered.length ? (
                <Link
                  to="/categorylist"
                  className="btn btn-warning rounded p-2 text-dark w-100"
                >
                  categorias
                </Link>
              ) : (
                <>
                  <button
                    onClick={onNextQuestions}
                    className="btn btn-warning rounded p-2 text-dark w-100 mb-2"
                  >
                    otra pregunta
                  </button>
                  <Link
                    to="/categorylist"
                    className="btn btn-warning rounded p-2 text-dark w-100"
                  >
                    categorias
                  </Link>
                </>
              )
            ) : indexQuestion + 1 === questionFiltered.length ? (
              <>
                <button
                  onClick={() => {
                    setAnsewered(false);
                    setActiveResult(true);
                  }}
                  className="btn btn-warning rounded p-2 text-dark w-100"
                >
                  finalizar
                </button>
                <button
                  onClick={onReset}
                  className="btn btn-warning rounded p-2 text-dark w-100"
                >
                  reiniciar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onNextQuestions}
                  className="btn btn-warning rounded p-2 text-dark w-100"
                >
                  siguiente pregunta
                </button>
                <button
                  onClick={onReset}
                  className="btn btn-warning rounded p-2 text-dark w-100"
                >
                  reiniciar
                </button>
              </>
            )}
            {/*  {indexQuestion + 1 === questionFiltered.length ? (
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
            </button> */}
          </Col>
        </Row>
      )}
    </>
  );
}

export default Question;
