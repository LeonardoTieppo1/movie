//quando for colocar uma expressão do javascript no react jsx tem que ser colocada entre {}
//página de formulário do site criado para ter o preenchimento da avaliação do usuário
import FormCard from 'components/FormCard';
import {useParams } from 'react-router-dom';


    //para capturar o elemento da rota deve usar o useParams
    //deve criar dentro da function, com esse parametro pode acessar o numero
    //se tiver erro deve ser o forms do App.tsx depois será resolvido por agora
    //você deve criar uma pasta no components com o nome de FormCard contendo os arquivos index.tsx e styles.css
    //depois copiar todo codigo do form e mover para o formCard
    //apos isso deve apagar todo o código do return, remover o import do css, remover o Props
    //com isso você retornará o <FormCard />
    //se der erro é que o formCard está esperando um argumento movie como parametro
    //ir para o FormCard
    //colocar como argumento para o FormCard o movieId={params.movieId}, quando chama o params.movieId ele pega o valor especificado da rota do App
    //se reclamar de erro deve ir para o FormCard 
    //e colocar `${params.movieId}` para sumir com o erro
    //o form vai pegar o parametro da requisição e repassar para FormCard
function Form() {

   const params=useParams();

    return (
       <FormCard  movieId={`${params.movieId}`}/>
    );
}

export default Form;