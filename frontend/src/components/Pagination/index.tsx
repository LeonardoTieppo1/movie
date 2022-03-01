import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

//fazer algumas alterações, a seta esquerda para desabilita-la deve colocar se a pagina primaria
// a seta direita vai ser desabilitada se a pagina for a ultima
//numero das paginas vai ser substituindo sendo number+1 a pagina inicial e totalPages sendo a ultima página da lista
//ir para o Listing

//colocar um valor de função dentro do Props
//no caso está sendo feito um evento customizado
//dentro do button esquerdo, tem um evento de HTML para click chamado de onClick e dentro do evento pode colocar uma função ()=> que leva ao onChange 
//que vai ter como valor (page.number-1), por que o primeiro botão é um botão de anterior, no caso sempre que clickar no botão
//chama a função onChange passando de argumento a pagina que estava -1, no botão de proximo mesma coisa mas como é um botão de proximo deve colocar com +1
//esse comando não é iniciante 
type Props={
    page:MoviePage;
    onChange: Function;
}
function Pagination({page,onChange}:Props) {
    return (
        <div className="movie-pagina-container">
            <div className="movie-pagina-box">
                <button className="movie-pagina-button" disabled={page.first} onClick={()=>onChange(page.number-1)}>
                    <Arrow />
                </button>
                <p>{`${page.number+1} de ${page.totalPages}`}</p>
                <button className="movie-pagina-button" disabled={page.last} onClick={()=>onChange(page.number+1)}>
                    <Arrow className="movie-flip-horizon" />
                </button>
            </div>
        </div>
    );
}
export default Pagination;