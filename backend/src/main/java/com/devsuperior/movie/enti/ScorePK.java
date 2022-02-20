package com.devsuperior.movie.enti;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable{

	private static final long serialVersionUID = 1L;

	/*Configurar a chave estrangeira usando um @ da JPA que é @ManyToOne, 
	  * sendo ela que vai fazer a configuração de chave estrangeira
	  * depois informar a chave estrangeira com o @JoinColumn(name="nomeDaChave", anotação da JPA
	  * caso apresente um erro pode ser que uma chave composta não tenha colocado o Serializable, 
	  * onde a classe que está a chave estrangeira não tem implementação Serializable, sendo uma interface do JAVA onde informa se o objeto pode ser convertido para bytes   
	  * sendo importante para trafegar na rede, para salvar arquivos, no caso da chave composta a JPA exige que a chave composta implemente o Serializeable
	  * para isso deve colocar em frente a classe implements Serializable e coloque o numero da versão como default  
	  * depois de configurar os erros vai para o application.test.properties*/
	
	@ManyToOne
	@JoinColumn(name="movie_id")
	private Movie movie;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	public ScorePK() {

	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
