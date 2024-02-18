import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const contexto = createContext();
const Provider = contexto.Provider;

function CustomProvider({ children }) {
  const [boardGame, setboardGame] = useState(false);

  const onBoardGame = (value) => {
    setboardGame(value);
    console.log(boardGame);
  };

  let parametro = useParams();
  useEffect(() => console.log("parametro" + parametro), [parametro]);

  const contextValue = {
    boardGame: boardGame,
    onBoardGame: onBoardGame,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}

export default CustomProvider;
