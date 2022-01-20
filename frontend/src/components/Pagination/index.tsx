import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';
function Pagination() {
    return (
        <div className="movie-pagina-container">
            <div className="movie-pagina-box">
                <button className="movie-pagina-button" disabled={true}>
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="movie-pagina-button" disabled={false}>
                    <Arrow className="movie-flip-horizon" />
                </button>
            </div>
        </div>
    );
}
export default Pagination;