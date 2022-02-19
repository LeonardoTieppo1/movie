//quando for colocar uma expressão do javascript no react jsx tem que ser colocada entre {}
//página de formulário do site criado para ter o preenchimento da avaliação do usuário
import './styles.css';
function Form() {
    const movie = {
        id: 1,
        image: "https://i.pinimg.com/564x/09/6e/e6/096ee672b082cab9358bffceec2b0744.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="movie-form-container">
            <img className="movie-imagem-poster" src={movie.image} alt={movie.title} />
            <div className="movie-poster-bottom-container">
                <h3>{movie.title}</h3>
                <form className="movie-form">
                    <div className="grupo-form movie-grupo-form">
                        <label htmlFor="email">Informe seu email</label>
                        <br/>
                        <input type="email" className="controle-form" id="email" />
                    </div>
                    <div className="grupo-form movie-grupo-form">
                        <label htmlFor="score">Informe a sua avaliação</label>
                        <br/>
                        <select className="controle-form" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movie-form-btn-container">
                        <button type="submit" className="btn btn-primary movie-btn">Salvar</button>
                    </div>
                </form>
                <button className="btn btn-primary movie-btn mt-3">Cancelar</button>
            </div>
        </div>
    );
}

export default Form;