import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
//página inicial do site, no caso será de listagem de filmes
function Listing() {
    //Forma Errada  pequeno teste de requisição
    //o axios tem muitas funções, entre eles tem o get onde ele faz uma requisição get e passar entre('url')
    axios.get(`${BASE_URL}/movies?size=10&page=0`)
   .then(Response => {
      console.log(Response.data);  
   });
    //só com isso a aplicação do frontend ja faz requisição, só que o resultado é uma promisse sendo um objeto que encapsula uma ação que pode acontecer depois 
    //para executar uma coisa depois que a requisição depois que chegar a resposta, vc tem que colocar na frente da chamada do get o .then() e o que colocar dentro vai ser executado depois que a requisição voltar 
    //pois a requisição que será feita no get pode levar um tempo para chegar sendo uma operação assincrona, tudo continua executando mas quando chegar a resposta ae vai querer executar uma coisa no .then() 
    return (
        <>
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