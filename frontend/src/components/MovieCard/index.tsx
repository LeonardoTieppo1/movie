import MovieScore from "components/MovieScore";
import './styles.css';
function Poster(){
    const movie = {
    id: 1,
    image: "https://i.pinimg.com/564x/09/6e/e6/096ee672b082cab9358bffceec2b0744.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

    return(
        <div>
            <img className="movie-image-poster" src={movie.image} alt={movie.title} />
            <div className="movie-poster-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore/>
                <button className="btn btn-primary movie-btn mt-3">Avaliar</button>
            </div>
        </div>
    );
}
export default Poster;