import Peliculas from "./components/Peliculas";
import ContextoProvider from "./context/Contexto";

function App() {
  return (
    <ContextoProvider>
      <Peliculas />
    </ContextoProvider>
  );
}

export default App;
