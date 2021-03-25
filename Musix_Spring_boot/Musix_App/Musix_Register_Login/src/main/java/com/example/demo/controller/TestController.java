package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/v1/test")
public class TestController {
    
    @GetMapping("/")
    public ResponseEntity<?> getNote(){
        return new ResponseEntity<String>("Protected Resource:"
                + "Details of Note ",HttpStatus.OK );
    }
}
