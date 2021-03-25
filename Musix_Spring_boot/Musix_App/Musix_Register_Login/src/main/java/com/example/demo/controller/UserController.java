package com.example.demo.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.exception.*;
import com.example.demo.model.*;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Controller
public class UserController {
    private UserService userService;
    private UserRepository Userrepository;

    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    @PostMapping("/register")
    @CrossOrigin(origins="*")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        ResponseEntity<?> response = null;

        try {
            userService.registerUser(user);
            response = new
                    ResponseEntity<String>(HttpStatus.OK);
        } catch (UserExistsException e) {
            response = new
                    ResponseEntity<String>(HttpStatus.CONFLICT);
            e.printStackTrace();
        } catch (Exception e) {
            response = new
                    ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
        return response;
    }

    @PostMapping("/login")
    @CrossOrigin(origins="*")
    public ResponseEntity<?> login(@RequestBody User user)
            throws UserNotFoundException {

        User validUser = userService.login(user.getEmail(),
                user.getPassword());

        if (validUser == null) {
            throw new UserNotFoundException();
        }

        // Build the Json Web Token
        String token =
                Jwts.builder().
                setId(validUser.getEmail()).
                setSubject(validUser.getPassword())
                .setIssuedAt(new Date()).
                signWith(SignatureAlgorithm.HS256,
                        "usersecretkey").
                compact();

        // Add it to a Map and send the map in response body
        Map<String, String> map1 = new
                HashMap<String, String>();
        map1.put("token", token);
        map1.put("message", "User Successfully logged in");

        ResponseEntity<Map<String, String>> response =
                new ResponseEntity<Map<String, String>>(
                        map1, HttpStatus.OK);
        return response;
    }
    
    @CrossOrigin(origins="*")
    @GetMapping("/getuserdetails/{userId}")
    public ResponseEntity<User> getUserdetail(@PathVariable("userId") String userId) {
		Optional<User> per_user = userService.getregistrationbyemail(userId);
		if(per_user.isPresent()) {
			User user = per_user.get();
			return new ResponseEntity<User>(user,HttpStatus.OK);
		}
		return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
	}
    
}