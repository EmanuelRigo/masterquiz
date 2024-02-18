import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function InfoGame() {
  const { onBoardGame, boardGame } = useContext(contexto);
  return (
    <Card className="col-md-6 text-center">
      <Card.Body>
        <Card.Title>{boardGame ? "juego de mesa" : "un jugador "}</Card.Title>
        <Card.Text>
          {boardGame
            ? "este juego es para jugar con amigos con un tablero de mesa"
            : "este juego es de un jugador"}
        </Card.Text>
        <Link to="/categorylist" className="btn btn-warning w-50 p-2 m-1 w-100">
          ok
        </Link>
        <Link
          to="/"
          onClick={() => {
            onBoardGame(false);
          }}
          className="btn btn-warning w-50 p-2 m-1 w-100"
        >
          volver
        </Link>
      </Card.Body>
    </Card>
  );
}

export default InfoGame;
