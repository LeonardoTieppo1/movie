import{ReactComponent as StarFull} from 'assets/img/starF.svg';
import{ReactComponent as StarHalf} from 'assets/img/starH.svg';
import{ReactComponent as StarEmpty} from 'assets/img/starE.svg';
import './styles.css';
//criação das estrelas para a avaliação do filme
//no caso será estático
function Stars(){
    return(
        <div className="movie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}
export default Stars;