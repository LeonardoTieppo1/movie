import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
//página inicial do site, no caso será de listagem de filmes
function Listing() {

    /*React Hooks(Gancho ou enganchado): Funções cujo comportamento está vinculado, ou ligado, ao estado e ao ciclo de vida do React a partir de componentes funcionais
    caso ocorra uma duplicação é por conta do componente do React que tem um ciclo de vida e ela pode passar pela lógica da função mais de uma vez
    pois se simplesmente colocar uma lógica solta não ligada ao ciclo de vida do componente pode ocorrer de rodar mais de uma vez
    então a melhor forma é usar o React Hooks, onde são uma forma de colocar uma lógica no componente de uma forma vincular ao ciclo de vida  
    useState: Manter o estado no componente, se quiser armazenar um dado no componente, e não colocar um let dentro do código e pronto  
    useEffect: executa algo na instanciação ou destruição do componente e tambem pode observar estado, ou seja, quando alguma coisa mudar ou executar alguma coisa
    */

    //crie uma constante com [] e dentro coloque 2 elementos o nome do estado, que no caso será o pageNumber sendo o numero da página que será mostrado na listagem
    //e o segundo é uma função que altera o estado, no caso será o setNomeEstado
    //com isso vai receber o useState(valorInicial), tambem é uma boa pratica iniciar com um valor inicial, exemplo qual o numero inicial da página  
    const [pageNumber, setPageNumber]=useState(0);

   //criar o useEffect() onde vai receber dois argumentos, uma função que vai ser executada,e uma lista de objetos que vai observar
   //ou seja, sempre que alterar algo dos objetos aqui ele vai executar novamente, se deixar a lista vazia ele só executa quando o componente for carregado
   //no lugar de colocar o axios solto vai ser colocado dentro do useEffects, e agora tem o useEffect que vai executar a função axios definida somente na hora que carregar o componente
   //e não executará mais de uma vez pois está dentro de um hook que está amarrando a execução dentro do ciclo de vida do componente 
   //se fizer o console.log(data); ele fará a requisição somente uma vez e carregará de colocar

    const [page, setPage]=useState <MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
            const data=response.data as MoviePage;
            setPage(data);
        });
    },[pageNumber]); 

    //Forma Errada  pequeno teste de requisição
    //o axios tem muitas funções, entre eles tem o get onde ele faz uma requisição get e passar entre('url')
    
    //só com isso a aplicação do frontend ja faz requisição, só que o resultado é uma promisse sendo um objeto que encapsula uma ação que pode acontecer depois 
    //para executar uma coisa depois que a requisição depois que chegar a resposta, vc tem que colocar na frente da chamada do get o .then() e o que colocar dentro vai ser executado depois que a requisição voltar 
    //pois a requisição que será feita no get pode levar um tempo para chegar sendo uma operação assincrona, tudo continua executando mas quando chegar a resposta ae vai querer executar uma coisa no .then() 
    //criar um elemento qualquer depois do <> 
    //perceba que no canto superior esquerdo vai ter uma numeração indicando a página
    //perceba tambem que o componente está renderizando de forma gráfica com base no valor interno que ele tem no caso o pageNumber
    //agora vai no axios que no caso a requisição axios você irá substituir o console.log por setPageNumber(), mas antes tem que colocar uma constante de data=response.data as(convertido) MoviePage 
   //depois coloque no setPageNumber(data.number) que será o numero de páginas 
   //para fazer o teste deverá de substituir o page da url para outro numero e testar
   //com isso foi criado uma logica de manter o estado dentro do componente e pode modificar o valor do estado e usar o layout visual
   



   //Props: podem ser entendidas como argumentos do componente React, o componente React é uma função que pode receber argumentos
   //agora tem que substituir os MovieCard por conta de que eles agora devem apresentar instancias do Props como argumento
   //para testar coloque o const movie e será passado como argumento movie em todos os MoviesCard, 
    //depois do teste, exclue o const movie e trazer os filmes da consulta, substitua o numero estático de páginas por pageNumber
    //ele faz a requisição e quando chegar a resposta retire o console.log(data) e o setPageNumber(data.number) onde são só testes para saber se ele estava indicando o numero da pagina corretamente
    //criar um outro estado para guardar um outro componente a pagina que foi carregada, usando [page,setPage]=useState() só que agora quem vai ser o objeto iinicial vai ser
    //você vai se aproveitar dos tipos de dados do MoviePage e coloca-los dentro da constante page 
    //quando vier uma resposta deve colocar o setPage(data), se reclamar de tipo do objeto
    //para isso deve parametrizar como <> generics, e dentro o MoviePage pois informará ao TypeScript o tipo do estado é MoviePage e verifique se fechou corretamente o axios e o useEffect
    //caso reclame dentro da lista de objeto deve ser por conta da instanica de pageNumber, como vc está usando o pageNumber para fazer alguma coisa
    //lendo o estado, o useEffect depende dele pois se o estado mudar o pageNumber vai ter que refazer a função, para isso deve informar que o useEffect vai depender do pageNumber, logo [pageNumber]
    //quando mudar o pageNumber vai refazer a requisição e atualizar a pagina novamente 
    //no lugar de ficar renderizando manualmente vai ser realizado um for nos filmes que retornam na requisição para mostrar um filme de cada vez
    //logo retire quase todos e deixe somente um como molde para vizualizar os filmes
    //crie uma expressão do React {page.content.map} e chamar a função de autaordem .map que vai permitir executar alguma coisa com cada item da coleção, array ou no caso cada filme
    //então no .map(item => {
    // executar algo dentro, no caso vai mostrar o molde para vizualização de filmes
    // se for uma função que ja está retornando algum valor não será necessario o return e pode colocar os parenteses direto })
    //depois verifique os erros como os parenteses colocados e entre outros, substitue o item por movie e com isso elimina o erro onde para cada movie da lista vai renderizar o div
    //IMPORTANTE: em uma renderização dinâmica de coleção, no caso de filmes, cada elemento rendezidado DEVE possuir um atributo key sendo uma exigência do React
    //onde ele faz um processamento interno de coleções renderizadas e precisa do atributo key e tem que ser um valor unico para cada atributo
    //no caso será o id do movie, no div do className deve colocar o key={informar a chave utilizada }  
    //se quiser que os dados sigam a mesma ordem para não ter risco do backend buscar os filmes em ordem diferente dependendo de como atualizar o filme
    //pode colocar antes da crase um outro parametro de ordenação, como um &sort=id, com isso garanto que a busca dos filmes sempre estaram na ordem
    //outra forma é ordenar por titulo, title, ae vai sempre ordenar de acordo com o titulo do filme 
   return (
        <>

            <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(movie =>(
                        <div key={movie.id} className="col">
                            <MovieCard movie={movie}/>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>

    );
}

export default Listing;