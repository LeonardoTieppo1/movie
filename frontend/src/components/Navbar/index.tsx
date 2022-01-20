import {ReactComponent as GhIcon} from 'assets/img/github.svg';
import './style.css';
function Navbar(){
    return(
    <header>
    <nav className="container">
      <div className="movie-nav-conteudo">
        <h1>Movies</h1>
        <a href="https://github.com/LeonardoTieppo1/">
          <div className="movie-contato-container">
            <GhIcon/ >
            <p className="movie-contato-link">/LeonardoTieppo1</p>
          </div>
          </a>
      </div>
    </nav>
  </header>
    );
}

export default Navbar;