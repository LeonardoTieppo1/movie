export type Movie={
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

/*Estrutura das paginas de filme*/

export type MoviePage={
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

}

/*Por que os valores que serão exportados para o backend são os tipos de estruturas contidas dentro das requisições do movie
e das paginas dos filmes, dentro do content é uma lista de objetos e no final terá outros objetos sempre pegar aqueles que são principais
pois o frontend está integrando com a API e tem que apresentar um tipo de dado exatamente igual aos dados da API para fazer a integração
então os dados serão do frontend que iram buscar */