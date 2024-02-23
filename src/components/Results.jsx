import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { GoTrophy } from "react-icons/go";

function Results({ questionFiltered, score, onReset }) {
  let trophy;

  if (((score / questionFiltered.length) * 100).toFixed(0) == 100) {
    trophy = (
      <div className="trophy__gold">
        <GoTrophy></GoTrophy>
      </div>
    );
    console.log("first");
  } else if (
    ((score / questionFiltered.length) * 100).toFixed(0) < 100 &&
    ((score / questionFiltered.length) * 100).toFixed(0) > 50
  ) {
    trophy = (
      <div className="trophy__silver">
        <GoTrophy></GoTrophy>
      </div>
    );
    console.log("first2");
  } else {
    console.log(((score / questionFiltered.length) * 100).toFixed(0));
  }

  return (
    <>
      {/*       <div>
        <div>
          <h1 className="text-light">resultados</h1>
          <span className="text-light">
            {((score / questionFiltered.length) * 100).toFixed(0)}%
          </span>
          <span className="text-light">
            de las preguntas ({score} de {questionFiltered.length})
          </span>
          <Button onClick={onReset}>volver a iniciar</Button>
        </div>
      </div> */}

      <Row>
        <Col
          md={3}
          className="p-4 d-flex flex-column align-items-center justify-content-center"
        >
          {trophy}
        </Col>
        <Col
          md={9}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          {" "}
          <span className=" text-light display-6">
            {((score / questionFiltered.length) * 100).toFixed(0)}%
          </span>
          <span className="text-light display-6">
            de las preguntas ({score} de {questionFiltered.length})
          </span>
          <Button onClick={onReset} className="mt-5">
            volver a iniciar
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Results;
