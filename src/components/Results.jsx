import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { GoTrophy } from "react-icons/go";

function Results({ questionShuffle, score, onReset }) {
  let trophy;

  if (((score / questionShuffle.length) * 100).toFixed(0) == 100) {
    trophy = (
      <div className="trophy__gold">
        <GoTrophy></GoTrophy>
      </div>
    );
    console.log("first");
  } else if (
    ((score / questionShuffle.length) * 100).toFixed(0) < 100 &&
    ((score / questionShuffle.length) * 100).toFixed(0) > 50
  ) {
    trophy = (
      <div className="trophy__silver">
        <GoTrophy></GoTrophy>
      </div>
    );
    console.log("first2");
  } else {
    console.log(((score / questionShuffle.length) * 100).toFixed(0));
  }

  return (
    <>
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
            {((score / questionShuffle.length) * 100).toFixed(0)}%
          </span>
          <span className="text-light display-6">
            de las preguntas ({score} de {questionShuffle.length})
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
