import Stars from "components/MovieStars";
import './styles.css';
//criar um componente que informará a nota como um número e o número de avaliações feitas no filme 
//crie paragráfos para compor os valores da avaliação e a sua contagem
//use{} para colocar comandos de javascript no jsx ou tsx
//usando um operador condicional ternário onde verifica se o score for menor que 0 exibe um -, mas caso o score seja maior que 0 então exibe o valor fixo com 1 casa decimal

//criar valores para avaliação e para as estrelas, no caso um props com os dois valores

type Props={
    score: number;
    count:number;
}


function Score({score, count}:Props){


    return(
        <div className="movie-score-container">
            <p className="movie-score-valor">{score > 0 ? score.toFixed(1):'-'}</p>
            <Stars score={score} />
            <p className="movie-score-count">{count} avaliações</p>
        </div>
    );
}

export default Score;