package com.devsuperior.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movie.dto.MovieDTO;
import com.devsuperior.movie.dto.ScoreDTO;
import com.devsuperior.movie.services.ScoreService;

@RestController
@RequestMapping(value="/scores")
public class ScoreController {
	
	//como é um put então coloque um @PutMapping
	//troque o findById para saveScore e 
	//tambem o @PathVariable Long id para ScoreDTO dto
	//retire o argumento do PutMapping 
	//na tela de formulario vai passar o id do movie, email e avaliação, vai ser um END-POINT, ou seja, uma requisição PUT que vai receber no corpo da requisição o objeto ScoreDTO
	//o corpo da requisição, exemplo postman onde AddRequest com o nome de Scores e altera de GET para PUT pois o scores é um save idenpotente
	//quando faz uma requisição POST ou PUT para salvar um objeto tem que ir no body pois tem que colocar um objeto que vai ser o corpo da requisição, mude para raw o tipo de dado será JSON
	//Dentro do JSON deve especificar o objeto que será salvo, no caso será { "movieId":1, "email":"rodrigo@gmail.com", "score":5}
	//para ser pego pelo JSON e convertido por ScoreDTO deve colocar um @RequestBody
	//agora tem que fazer o service, para isso copie e no mesmo pacote do services cole mas coloque o nome de ScoreServices
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		MovieDTO movieDTO= service.saveScore(dto);
		return movieDTO;
	}
}
