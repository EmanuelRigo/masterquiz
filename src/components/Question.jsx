import { ProgressBar, Row, Col } from "react-bootstrap";
import { BsArrowThroughHeart } from "react-icons/bs";

import { useState } from "react";

function Question({
  filteredQuestions,
  setIndexQuestion,
  indexQuestion,
  questionFiltered,
  icon,
}) {
  console.log(filteredQuestions);
  const [numero, setNumero] = useState(0);

  function crecimientoGradual() {
    const intervalo = 50 * 1000;
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

  const nextQuestions = () => {
    setIndexQuestion(indexQuestion + 1);
  };

  return (
    <Row>
      <Col xs={12} className="text-center mb-4">
        <span className="text-light logo">{icon}</span>
        <span className="text-light">
          {indexQuestion + 1} / {questionFiltered.length}
        </span>
      </Col>
      <Col xs={12}>
        <p className="text-light text-center mb-4 fs-6  ">
          {filteredQuestions.question}
        </p>
      </Col>

      <Col className="mb-3" xs={12}>
        <ProgressBar now={Math.floor(numero)} />

        <button onClick={crecimientoGradual}>iniciar</button>
      </Col>
      <Col sm={12} md={6} className="text-center ">
        {" "}
        <p className="bg-warning rounded p-2 text-dark">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="bg-warning rounded p-2 text-dark">
          Lorem ipsum dolor sit amet.
        </p>{" "}
      </Col>
      <Col sm={12} md={6} className="text-light text-center">
        {" "}
        <p className="bg-warning rounded p-2 text-dark">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="bg-warning rounded p-2 text-dark">
          Lorem ipsum dolor sit amet.
        </p>{" "}
      </Col>
      <Col>
        <button
          onClick={nextQuestions}
          className="btn btn-warning rounded p-2 text-dark w-100"
        >
          siguiente pregunta
        </button>
      </Col>
    </Row>
  );
}

export default Question;
