package com.devsuperior.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movie.dto.MovieDTO;
import com.devsuperior.movie.services.MovieService;

//implementar o END-POINT, endereço que pode ser acessado do navegador ou de um testador de requisição que vai responder uma pagina de filmes
//para isso deve configurar a classe como sendo um controladorREST, colocando o @RestController,@ResultMapping(value="/movies")
//criar método Page<MovieDTO> findAll(Pageable pageable), da mesma forma que o service depende do repository, o controller depende do service pois vai implementar as camadas de controlador>serviço>repository 
//depois uma composição de componente usando o service, depois colocar um return no método findAll
//depois um @GetMapping onde configura o método que vai receber de acordo com o caminho pelo Get do HTTP
//depois ir para o PostMan fazer uma requisição de http://localhost:8080/movies
//para aparecer uma lista de arquivos dentro do content, se quiser alterar o valor do tamanho é só colocar url?size=numSize, e para buscar outras paginas,&page=numPage, caso ultrapasse o numPage retornará uma lista vazia
@RestController
@RequestMapping(value="/movies")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@GetMapping
	public Page<MovieDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	//parametro de url
	//para não ter nenhum erro no argumento de url
	//coloque o @PathVariable
	@GetMapping(value="/{id}")
	public MovieDTO findById(@PathVariable Long id) {
		return service.findById(id);
	}
}
