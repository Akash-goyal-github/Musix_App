package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Favourite;

public interface FavouriteRepository extends MongoRepository<Favourite, Integer>{

}
