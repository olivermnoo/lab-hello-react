import { AllFirstPart } from "./components/FirstPart/AllFirstPart";
import { AllSecondPart } from "./components/SecondPart/AllSecontPart";
// import para importar, {} sempre para puxarmos o elemento e o from para dizermos de qual arquivo ele está vindo
// Essa área superior servirá apenas para importar arquivos

function App() {
  // tudo antes do return ainda é JS normal, ou seja, podemos e devemos utilizar para manipular dados nessa parte, como variáveis que irão receber parametros src e etc.
  return (
    <div className="App">
      <AllFirstPart />
      <AllSecondPart />
    </div>
  );
}

export default App;
