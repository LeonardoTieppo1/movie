package com.devsuperior.movie.dto;

import com.devsuperior.movie.enti.Movie;

public class MovieDTO {
	//atributos
	//copiar os dados da classe Movie, e não faz parte da transação de dados
	private Long    id;
	private String  title;
	private	Double  score;
	private Integer count;
	private String  image;
	
	//métodos
	//criar um constructor vazio
	public MovieDTO() {
	}

	//criar um constructor da classe 
	public MovieDTO(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
	//para facilitar na copia de objetos da entidade para o Movie, vai ser criado um constructor que receba a entidade 
	//e para copiar os dados do Movie para o objeto DTO é só fazer uma substituição dos parametros para o entitie.getNome();
	public MovieDTO(Movie movie) {
		id = movie.getId();
		title = movie.getTitle();
		score = movie.getScore();
		count = movie.getCount();
		image = movie.getImage();
	}
	//getters e setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
}
