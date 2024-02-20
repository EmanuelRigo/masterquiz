import React from "react";
import { Button } from "react-bootstrap";

function Results({ questionFiltered, score, onReset }) {
  return (
    <div>
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
    </div>
  );
}

export default Results;
