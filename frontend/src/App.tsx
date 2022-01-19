//é assim que importa uma imagem no React para aproveitar em um componente proprio
//colocando o ReactComponent entre chaves from 'caminho da imagem'
//coloque dentro do link em forma de <tag />, pois o componente react na verdade vira uma sintaxe de <tag /> em html 

import Navbar from "./components/Navbar";

function App() {
  return (
      <Navbar />
  );
}

export default App;
