import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function InfoGame() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Un jugador</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/" className="btn btn-warning w-50 p-2 m-1 w-100">
          ok
        </Link>
        <Link to="/" className="btn btn-warning w-50 p-2 m-1 w-100">
          volver
        </Link>
      </Card.Body>
    </Card>
  );
}

export default InfoGame;
