import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { IoDiceOutline } from "react-icons/io5";
import { CgDice1 } from "react-icons/cg";
import { CgDice2 } from "react-icons/cg";
import { CgDice3 } from "react-icons/cg";
import { CgDice4 } from "react-icons/cg";
import { CgDice5 } from "react-icons/cg";
import { CgDice6 } from "react-icons/cg";

function Dice() {
  return (
    <Row className=" flex-column align-items-center">
      <Col className="text-center categorypage__icon">
        <div className="text-light">
          {/*  <IoDiceOutline></IoDiceOutline> */}
          <CgDice1></CgDice1>
        </div>
      </Col>{" "}
      <Col>
        <h3 className="text-light pt-3  pb-4 text-center">dado2</h3>
      </Col>
      <Col>
        <Button
          className="btn-warning w-100"
          onClick={() => {
            setActivate(true);
          }}
        >
          tirar dado
        </Button>
      </Col>
    </Row>
  );
}

export default Dice;
