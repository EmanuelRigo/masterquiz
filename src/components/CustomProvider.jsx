import { createContext, useContext, useState, useEffect } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export const useCart = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

function CustomProvider({ children }) {
  return <Provider value={valorDelContexto}>{children}</Provider>;
}

export default CustomProvider;
