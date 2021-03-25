package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Recommend;
import com.example.demo.repository.RecommendRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/recommend")
public class RecommendController {
	static int count=0;
	
	
	@Autowired
	private RecommendRepository repository;
	
	@PostMapping("/addtorecommend")
	public String addtoRecommend(@RequestBody Recommend recommend)
	{
		count=repository.findAll().size()+1;
		recommend.setId(count);
		
		
		repository.save(recommend);
		System.out.println(recommend);
		
		return "Added in Recommend";
	}
	
	@GetMapping("/getallrecommend")
	public List<Recommend> getRecommend()
	{
		return repository.findAll();
	}
	

}
