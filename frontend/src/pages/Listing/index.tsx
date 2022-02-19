import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
//página inicial do site, no caso será de listagem de filmes
function Listing() {
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