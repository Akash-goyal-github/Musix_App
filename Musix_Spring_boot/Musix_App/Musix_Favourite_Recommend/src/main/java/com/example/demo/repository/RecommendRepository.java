package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Favourite;
import com.example.demo.model.Recommend;

public interface RecommendRepository extends MongoRepository<Recommend, Integer>{

}
