import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Movie} from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
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
     
        //esse objeto navigate serve para comando de direcionamento de rota 
        const navigate=useNavigate();

        const[movie,setMovie]=useState<Movie>();

        useEffect(() => {
            axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
        },[movieId]);

        //criar constante de envio de formulario com o uso do evento para executar alguma função
        //para consertar o event deve colocar :React.FormEvent<HTMLFormElement> com isso deve consertar o tipo de evento do envio do formulario
        //evitar que envie da tela, não recarregando a pagina e sim parar o envio e fazer de forma customizada 
        //para parar o envio padrão coloque o event.preventDefault();
        //para pegar o email deve colocar uma constante var= (event.target as any).email.value
        //no typescript pode haver erros, essa propriedade values pode não existir para funcionar deve colocar 
        //(event.target(referencia de formulario) as any).email(chamar no formulario para acessar o input do email).value(valor do input) 
        //mesma coisa para o score 
        //use o console para fazer testes sobre o envio dos dados do formulario 
        //caso der certo vai aparecer no console sem erros e esta capturando os dados no formulario
        //agora deve fazer um controle de formulario tanto elaborado, fazendo de forma simplificada 
        //para isso deve fazer uma condição de escrever o email
        /*     função de validação de email

        const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}; 

    se o email não for validado, ele vai barrar o envio do email de forma simples 
    */
        const handleSubmit=(event:React.FormEvent<HTMLFormElement>) => {
            
            event.preventDefault();
        
            const email= (event.target as any).email.value;
            const score= (event.target as any).score.value;
            

            if(!validateEmail(email)){
                 return;   
            }

            //configuração de requisição do Axios no uso do método PUT
            //onde o baseURL:BASE_URL, vai receber a BASE_URL selecionada
            //método de dados no caso será PUT
            //a url selecionada será /scores
            //e a data que é o corpo que será enviado os dados
            const config: AxiosRequestConfig={
                baseURL:BASE_URL,
                method:'PUT',
                url:'/scores',
                data:{
                    email: email,
                    movieId:movieId,
                    score: score
                }
            }
            //fazer a requisição do PUT, usando o axios(config) vai resultar em uma promisse para executar alguma coisa
            //na hora que voltar uma resposta tem que colocar .then
            // quando chegar a resposta dar um console.log(response.data) para saber se está funcionando  
            //caso der certo retire o console.log
            axios(config).then(response => {
                navigate("/");
            });
        }

         return (
             <div className="movie-form-container">
                 <img className="movie-imagem-poster" src={movie?.image} alt={movie?.title} />
                 <div className="movie-poster-bottom-container">
                     <h3>{movie?.title}</h3>
                     <form className="movie-form" onSubmit={handleSubmit}>
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