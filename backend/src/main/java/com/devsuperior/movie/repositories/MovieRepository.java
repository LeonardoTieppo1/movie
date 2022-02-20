package com.devsuperior.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movie.enti.Movie;

//criar uma interface que vai herdar(extends) do JpaRepository e parametrizar <tipo da Entidade, tipo do id da Entidade>
//depois criar um class de service
public interface MovieRepository extends JpaRepository<Movie,Long> {

}
