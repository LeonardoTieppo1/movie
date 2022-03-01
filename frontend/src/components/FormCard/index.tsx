import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Movie, MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import './styles.css'; 

type Props={
        movieId:string;
    }

    //no FormCard deverá de fazer algumas alterações como o nome da função, exclusão do useParams, mover a pasta do styles.css para a pasta
    //com isso toda a renderização do formulario será feito no componente FormCard
    //ir para o index do Form 
    //para chamar de acordo com o numero do id do movie, deve trocar a instancia do Prop para movieId pois ele chamará somente o id do movie
    //volte para o index do Form
    //e troque o tipo de dado do movieId para string, mas caso o erro persistir deve ir para o Form
    //criar uma lógica para buscar do backend o filme de acordo com o id dele
    //crie um estado do useState() com [movie,setMovie]=useState(), mas tem que colocar uma parametrização <Movie>
    //crie o estado de useEffect como o Listening, mas sua url é BASE_URL/movies/movieId
    //depois uma resposta com then(response => {
    //setMovie(response.data)
    //});
    //caso tenha erro coloque movie? pois o ? é opcional se o objeto existir ele pega o valor senão existir ele não pega nada 
    //Atenção coloque o movieId como lista de objeto do useEffect, o argumento do movieId que chegou do props
    //vai vir como dependencia do useEffect, pois senão colocar a requisição seria feita inumeras vezes pois foi usado o movieId
    //e deve informar que vai ser feita a requisição somente uma vez e será feita novamente caso o valor do id mudar 
    //depois salva no github, depois vai para o movieStars

    function FormCard({movieId}:Props) {
     

        const[movie,setMovie]=useState<Movie>();

        useEffect(() => {
            axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
        },[movieId]);




         return (
             <div className="movie-form-container">
                 <img className="movie-imagem-poster" src={movie?.image} alt={movie?.title} />
                 <div className="movie-poster-bottom-container">
                     <h3>{movie?.title}</h3>
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
                     <Link to={`/`}>
                         <div className="btn btn-primary movie-btn mt-3">Cancelar</div>
                     </Link>
                 </div>
             </div>
         );
     }
     
     export default FormCard;