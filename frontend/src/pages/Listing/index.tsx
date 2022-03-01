import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
//página inicial do site, no caso será de listagem de filmes
function Listing() {

    /*React Hooks(Gancho ou enganchado): Funções cujo comportamento está vinculado, ou ligado, ao estado e ao ciclo de vida do React a partir de componentes funcionais
    caso ocorra uma duplicação é por conta do componente do React que tem um ciclo de vida e ela pode passar pela lógica da função mais de uma vez
    pois se simplesmente colocar uma lógica solta não ligada ao ciclo de vida do componente pode ocorrer de rodar mais de uma vez
    então a melhor forma é usar o React Hooks, onde são uma forma de colocar uma lógica no componente de uma forma vincular ao ciclo de vida  
    useState: Manter o estado no componente, se quiser armazenar um dado no componente, e não colocar um let dentro do código e pronto  
    useEffect: executa algo na instanciação ou destruição do componente e tambem pode observar estado, ou seja, quando alguma coisa mudar ou executar alguma coisa
    */

    //crie uma constante com [] e dentro coloque 2 elementos o nome do estado, que no caso será o pageNumber sendo o numero da página que será mostrado na listagem
    //e o segundo é uma função que altera o estado, no caso será o setNomeEstado
    //com isso vai receber o useState(valorInicial), tambem é uma boa pratica iniciar com um valor inicial, exemplo qual o numero inicial da página  
    const [pageNumber, setPageNumber]=useState(0);
   //criar o useEffect() onde vai receber dois argumentos, uma função que vai ser executada,e uma lista de objetos que vai observar
   //ou seja, sempre que alterar algo dos objetos aqui ele vai executar novamente, se deixar a lista vazia ele só executa quando o componente for carregado
   //no lugar de colocar o axios solto vai ser colocado dentro do userEffects, e agora tem o userEffect que vai executar a função axios definida somente na hora que carregar o componente
   //e não executará mais de uma vez pois está dentro de um hook que está amarrando a execução dentro do ciclo de vida do componente 
   //se fizer o console.log(data); ele fará a requisição somente uma vez e carregará de colocar     
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=10&page=0`)
        .then(response => {
            const data=response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
       });
    },[]); 

    //Forma Errada  pequeno teste de requisição
    //o axios tem muitas funções, entre eles tem o get onde ele faz uma requisição get e passar entre('url')
    
    //só com isso a aplicação do frontend ja faz requisição, só que o resultado é uma promisse sendo um objeto que encapsula uma ação que pode acontecer depois 
    //para executar uma coisa depois que a requisição depois que chegar a resposta, vc tem que colocar na frente da chamada do get o .then() e o que colocar dentro vai ser executado depois que a requisição voltar 
    //pois a requisição que será feita no get pode levar um tempo para chegar sendo uma operação assincrona, tudo continua executando mas quando chegar a resposta ae vai querer executar uma coisa no .then() 
    //criar um elemento qualquer depois do <> 
    //perceba que no canto superior esquerdo vai ter uma numeração indicando a página
    //perceba tambem que o componente está renderizando de forma gráfica com base no valor interno que ele tem no caso o pageNumber
    //agora vai no axios que no caso a requisição axios você irá substituir o console.log por setPageNumber(), mas antes tem que colocar uma constante de data=response.data as(convertido) MoviePage 
   //depois coloque no setPageNumber(data.number) que será o numero de páginas 
   //para fazer o teste deverá de substituir o page da url para outro numero e testar
   //com isso foi criado uma logica de manter o estado dentro do componente e pode modificar o valor do estado e usar o layout visual
   
    return (
        <>

            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MovieCard />
                    </div>
                    <div className="col">
                        <MovieCard />
                    </div>
                    <div className="col">
                        <MovieCard />
                    </div>
                    <div className="col">
                        <MovieCard />
                    </div>
                    <div className="col">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Listing;