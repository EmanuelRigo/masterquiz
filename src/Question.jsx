import { ProgressBar, Row, Col } from "react-bootstrap";

function Question() {
  return (
    <Row>
      <Col>
        <h3 className="text-light">Question</h3>
        <ProgressBar now={60} />
      </Col>
    </Row>
  );
}

export default Question;
