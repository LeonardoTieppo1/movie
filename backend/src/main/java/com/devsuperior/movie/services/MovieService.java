package com.devsuperior.movie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movie.dto.MovieDTO;
import com.devsuperior.movie.enti.Movie;
import com.devsuperior.movie.repositories.MovieRepository;

//quando for algo de services tem que indicar o nomeClasseService
@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository; 
	
	/*criar o método findAll() e vai ter como tipo List com parametro<MovieDTO>
	pois dentro do padrão de camadas a comunicação de dados entre o serviço e o controlador é feita por DTO
	entre o serviço e o Repository é por entidade, só que quando o serviço for devolver essa resposta para o controlador
	tem que ser o DTO, então no caso a resposta do método será entidadeDTO,pois será feita a transação será resolvida no  
	para efetuar a busca dos filmes será utilizado o MovieRepository para acessar o BD
	para resolver a dependencia do repository vai ser colocado um @Autowired, pois quando faz um sistema que ja tem um gerenciamento de dependencias
	não pode instanciar os objetos manualmente, como o framework ja tem um gerenciador de dependencia ele faz isso para o desenvolvedor, sempre que precisar de um objeto
	é só declarar o componente  e colocar o @Autowired
	para o método de busca paginada tem que acrescentar o método Pageable pageable e tambem no parâmetro dentro do
	depois trocar o List para Page
	com isso coloque o Page<MovieDTO> page=result.map, o map vai aplicar uma função a cada elemento da lista (x->newMovieDTO(x);
	depois coloque um @Transactional no método com (readOnly=true) para informar que é só um método de leitura
	depois criar um class de controller
	*/
	
	@Transactional(readOnly=true)
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> result=repository.findAll(pageable);
		Page<MovieDTO> page=result.map(x->new MovieDTO(x));
		return page;
	}
	//método para buscar um unico filme,colocando um findById(Long id) ou seja, vai receber o id pois a busca será feita por Id
	//depois retirar todos os Pageables<> e Pages<>, mantendo o Movie e o MovieDTO, no método de repository coloque .get(); para pegar o objeto
	//pois o findById ele retorna o objeto optional, para acessar o objeto Movie dentro do optional coloca o .get();
	//depois ir no controller para colocar o END-POINT para retornar 1 unico filme por id
	@Transactional(readOnly=true)
	public MovieDTO findById(Long id){
		Movie result=repository.findById(id).get();
		MovieDTO dto=new MovieDTO(result);
		return dto;
	}
}
