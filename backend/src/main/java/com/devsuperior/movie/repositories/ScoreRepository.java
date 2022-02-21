package com.devsuperior.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movie.enti.Score;
import com.devsuperior.movie.enti.ScorePK;


public interface ScoreRepository extends JpaRepository<Score,ScorePK> {

}
