package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Recommendwithcounter;
import com.example.demo.repository.CounterRecommendRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/recommendcounter")
public class CounterRecommendController {
	
	@Autowired
	private CounterRecommendRepository repository;
	
	@PostMapping("/addtorecommendcounter")
	public String addtoRecommend(@RequestBody Recommendwithcounter recommend)
	{
		
		repository.save(recommend);
		System.out.println(recommend);
		
		return "Added in Recommend Counter";
	}
	
	@GetMapping("/getallrecommendcounter")
	public List<Recommendwithcounter> getRecommendcounter()
	{
		return repository.findAll();
	}

}