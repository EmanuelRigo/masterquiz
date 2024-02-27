import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  CgDice1,
  CgDice2,
  CgDice3,
  CgDice4,
  CgDice5,
  CgDice6,
} from "react-icons/cg";
import { IoDiceOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Dice() {
  const [dice, setDice] = useState(0);
  const [activate, setActivate] = useState(false);

  const tirarDados = () => {
    const tirar = () => {
      const dado = Math.floor(Math.random() * 6) + 1;
      setDice(dado);
    };

    const intervalo = setInterval(tirar, 150);

    setTimeout(() => {
      clearInterval(intervalo);
      setActivate(false);
    }, 2000);
  };

  useEffect(() => {
    if (activate) {
      tirarDados();
    }
  }, [activate]);

  let componente;

  switch (dice) {
    case 1:
      componente = <CgDice1 />;
      break;
    case 2:
      componente = <CgDice2 />;
      break;
    case 3:
      componente = <CgDice3 />;
      break;
    case 4:
      componente = <CgDice4 />;
      break;
    case 5:
      componente = <CgDice5 />;
      break;
    case 6:
      componente = <CgDice6 />;
      break;
    default:
      componente = <IoDiceOutline />;
  }

  return (
    <Row className=" flex-column align-items-center">
      <Col className="text-center categorypage__icon mb-5">
        <div className="text-light">{componente}</div>
      </Col>

      <Col>
        <Button
          className="btn-warning w-100 mb-3"
          onClick={() => {
            setActivate(true);
          }}
        >
          Tirar dado
        </Button>
        <Link to="/categorylist" className="btn btn-warning w-100">
          Categorias
        </Link>
      </Col>
    </Row>
  );
}

export default Dice;
