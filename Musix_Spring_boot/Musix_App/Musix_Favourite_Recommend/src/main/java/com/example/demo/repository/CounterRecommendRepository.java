package com.example.demo.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Recommendwithcounter;

public interface CounterRecommendRepository extends MongoRepository<Recommendwithcounter, String>{

}
