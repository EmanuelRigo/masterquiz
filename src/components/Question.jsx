import { ProgressBar, Row, Col } from "react-bootstrap";
///////may///////
import { BsArrowThroughHeart } from "react-icons/bs";
import "./Question.css";
///////fin may///////

function Question() {
  return (
    <Row>
      <Col xs={12} className="text-center mb-4">
        <BsArrowThroughHeart className="text-light logo" />
      </Col>
      <Col xs={12}>
        <p className="text-light text-center mb-4 fs-6  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laboriosam ab omnis nemo quidem eos magni ipsam, ipsa facere
        </p>
      </Col>

      <Col className="mb-3" xs={12}>
        <ProgressBar now={60} />
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
    </Row>
  );
}

export default Question;
// s;
