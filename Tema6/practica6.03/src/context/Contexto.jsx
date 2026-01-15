import { createContext, useState } from "react";

export const Contexto = createContext();

const ContextoProvider = ({ children }) => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [protagonistas, setProtagonistas] = useState([]);

  return (
    <Contexto.Provider
      value={{
        peliculaSeleccionada,
        setPeliculaSeleccionada,
        protagonistas,
        setProtagonistas
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export default ContextoProvider;
