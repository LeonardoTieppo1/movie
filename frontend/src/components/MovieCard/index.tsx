import MovieScore from "components/MovieScore";
import './styles.css';
import {Link} from "react-router-dom";
import { Movie } from "types/movie";
//criar um tipo(type) interno, não exporte pois ele existirá somente dentro do arquivo, e será chamado de Props
// e informar que ele pode ter vários dados, no caso somente os dados do Movie serão utilizados, esse é o tipo de dados que a função vai receber
// então para indicar na função tem que colocar um {objeto desestruturado} pois foi indicado um objeto, para pegar o objeto deve indicar {nomeObjeto}:Props e indicar o tipo dele     
//apaga o que estiver alocado de forma local pois como é o mesmo nome o sistema vai manter, o componente ficará pronto para funcionar com o objeto só que vai ser com o objeto que vai chegar de argumento
//agora o componente MovieCard ele recebe como argumento o prop que é o objeto e vai fazer a renderização do componente com o argumento 
//foi criado uma função dentro do MovieScore onde a função vai receber como argumento o movie.count e o movie.score

type Props={
    movie:Movie;
}

function Poster({movie}:Props){

    return(
        <div>
            <img className="movie-image-poster" src={movie.image} alt={movie.title} />
            <div className="movie-poster-btm-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score}/>

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary movie-btn mt-3">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}
export default Poster;