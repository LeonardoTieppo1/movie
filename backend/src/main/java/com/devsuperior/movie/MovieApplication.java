package com.devsuperior.movie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieApplication.class, args);
	/*Criação de configuração de kors:
	 * back-end vai estar hospedado na nuvem, ou heroku, e o front-end vai ser hospedado no netfly sendo sistemas diferentes em hosts diferentes
	 * por padrão nos navegadores, um sistema que está em um lugar não pode acessar uma API de outro lugar, para isso deve se liberar no back-end
	 Classes das entidades do sistema que estaram dentro do DB, onde serão armazenadas em forma de tabelas 
	*/
	}

}
