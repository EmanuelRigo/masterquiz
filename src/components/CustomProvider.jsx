import { createContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const contexto = createContext();
const Provider = contexto.Provider;

function CustomProvider({ children }) {
  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
}

export default CustomProvider;
