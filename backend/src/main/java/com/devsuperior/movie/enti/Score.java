package com.devsuperior.movie.enti;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/*No score a mesma coisa que o Movie e o User*/
@Entity
@Table(name="tb_score")
public class Score {
	
	/*No caso como tem uma chave composta então será usado o @EmbededdedId*/	
	/*quando faz uma chave composta tem que colocar =new ConstructorName();*/

	@EmbeddedId
	private ScorePK id=new ScorePK();
	
	private Double value;
	
	public Score() {
		
	}

	public Score(ScorePK id,Double value) {
		this.id=id;
		this.value = value;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}
	
	//O método vai servir para informar um filme e associar com o score, para associar tem que colocar o movie dentro do scorePK  
	//pois o id é do tipo scorePK, e a classe scorePK tem referencia do movie, com isso chama o setMovie() para salvar a referência no ScorePK 
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	public void setUser(User user) {
		id.setUser(user); 
	}
	
}
