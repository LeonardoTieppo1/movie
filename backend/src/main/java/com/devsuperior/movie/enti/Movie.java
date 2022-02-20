package com.devsuperior.movie.enti;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_movie")
public class Movie {

	/*Sempre vai ser usado os tipos com letra maiuscula, por que no JAVA existem dois tipos de dados
	 * primitivos ou Classe, sendo a Classe é mais adequado para os dados que serão salvos no BD, pois aceita NULL, Herança.
	 * sempre usar os tipos Classe, e colocar em private
	 * depois criar um construtor vazio para não ter erros de instancia dos parâmetros
	 * e ae sim criar um construtor com todos os atributos criados
	 * deve fazer o mapeamento do objeto relacional em cada uma das classes de dominio, 
	 * são configurações que vão dizer para o JPA como os objetos do orientado a objetos vai ser convertido para o modelo relacional do BD
	 * coloque um @Entity em cima da classe, depois aperta o CTRL+SHIFT+O e selecione a opção persistence, pois é especificação já o hibernate é implementação, 
	 * sempre dar preferencia para depender da especificação e não da implementação pois se no futuro trocar a implementação a especificação fica a mesma 
	 * depois coloque o @Table(name="nomeTable") para especificar o nome da tabela, e importa o persistence do table
	 * colocar um @Id e depois o @GeneratedValue para configurar que o Id será auto_icrement no BD
	 * para isso coloque (strategy=IDENTITY)*/
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long    id;
	private String  title;
	private	Double  score;
	private Integer count;
	private String  image;
	
	public Movie() {
	}

	public Movie(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}

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
