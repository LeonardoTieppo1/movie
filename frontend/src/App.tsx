//é assim que importa uma imagem no React para aproveitar em um componente proprio
//colocando o ReactComponent entre chaves from 'caminho da imagem'
//coloque dentro do link em forma de <tag />, pois o componente react na verdade vira uma sintaxe de <tag /> em html 
//importar 3 componentes do react router dom instalado, esses componentes serviram para configurar as rotas e tambem importar os componentes de react criados para ativar o componente em cada rota 
//coloca o BrowserRouter para iniciar a configuração das rotas
//dentro do BrowserRouter coloca o Navbar pois todas as páginas terão uma barra de navegação, então ele é colocado fora das rotas, então por padrão as páginas terão o Navbar
//depois colocar o componentes Routes, configura rota por rota, no caso a rota(Route) no caminho(path) raiz("/") tem que abrir a página de listing
//na rota(Route) do camiho(path) do formulario("/form"), no caso apresenta uma subrota passando um parametro que vai ser o id do filme  
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Listing from 'pages/Listing';//criar uma rota de página
import Form from 'pages/Form';
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Listing/ >} />
            <Route path="/form">
                <Route path=":movieId" element={<Form />} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
