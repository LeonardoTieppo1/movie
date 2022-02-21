package com.devsuperior.movie.dto;

public class ScoreDTO {
	//atributos
	private Long movieId;
	private String email; 
	private Double score;
	
	//métodos
	public ScoreDTO() {	
	}
	
	//No caso quando o usuário for clickar para salvar ele manda uma requisição para salvar no BD
	//e com isso deve criar  um END-POINT, só que para salvar o END-POINT não será get, nem post e sim um
	//pois se o mesmo usuário salva mais de uma vez a mesma coisa não vai ter alteração, pois não vai inserir outra avaliação do usuário logo não vai salvar mais de uma vez o mesmo usuário
	//ou seja, é uma operação de salvar de forma idenpotente, depois que salva a primeira vez se salvar mais de uma vez a mesma coisa não muda nada, nesse caso será o verbo PUT, pois é salvar de forma idenpotente, salvar mais de uma vez tem o mesmo efeito de salvar uma vez só, e tambem pode ser para atualizar   
	
	//criar o ScoreController fazendo ctrl+c e ctrl+v dentro do pacote de controllers
	
	//getters e setters
	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
	
	
	
	
}
