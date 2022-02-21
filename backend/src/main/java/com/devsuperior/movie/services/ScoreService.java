package com.devsuperior.movie.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movie.dto.MovieDTO;
import com.devsuperior.movie.dto.ScoreDTO;
import com.devsuperior.movie.enti.Movie;
import com.devsuperior.movie.enti.Score;
import com.devsuperior.movie.enti.User;
import com.devsuperior.movie.repositories.MovieRepository;
import com.devsuperior.movie.repositories.ScoreRepository;
import com.devsuperior.movie.repositories.UserRepository;

//quando for algo de services tem que indicar o nomeClasseService

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository; 
	//para fazer a operação de salvar o score, vai precisar do MovieRepository pois tem que buscar o filme do BD apartir do Id do filme
	//mas precisa tambem do repositório do usuário, pois o usuário vai ser buscado primeiro
	//para criar deve ir para o pacote de repositórios, copie e no pacote cole mas mude o nome para UserRepository
	//troque Movie para User e importe a entidade
	//o mesmo processo para o score, mas o tipo de id será ScorePK
	//mas no caso vai ser buscado o email do usuário então vai ter um massete do Spring JPA que é criar uma busca usando o proprio nome do campo
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
			User user= userRepository.findByEmail(dto.getEmail());//buscar o usuário no BD
			if(user==null) {
				user=new User();
				user.setEmail(dto.getEmail());
				user=userRepository.saveAndFlush(user);//salvar no BD 
				
			}
			Movie movie=movieRepository.findById(dto.getMovieId()).get();//colocar o .get() para evitar optional
			
			Score score= new Score();
			score.setMovie(movie);
			score.setUser(user);
			score.setValue(dto.getScore());//preparado o objeto Score com os 3 dados
			
			//salvar os dados do score
			score=scoreRepository.saveAndFlush(score);
			
			
			double sum=0.0;
			for(Score s: movie.getScores()){
				sum=sum+s.getValue();
			}	
				//valor das avaliações acumuladas
			//acesso a lista de scores associadas ao filme, crie um for para percorrer todos os scores dentro de um filme
			//com isso percorre a lista de scores acumulando a soma de todos os valores na variável sum
			
			double avg=sum/movie.getScores().size();
			//média de avaliações com o acumulo de scores / pela quantidade da coleção de avaliadores
			
			movie.setScore(avg);
			//o avg vai ser o novo numero do Score do filme 
			movie.setCount(movie.getScores().size());
			//enquanto a contagem será o tamanho de avaliações
			movie=movieRepository.save(movie);
			//só salvar os dados
			
			return new MovieDTO(movie);
	}
}
