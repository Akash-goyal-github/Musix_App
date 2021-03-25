package com.example.demo.service;

import java.io.ByteArrayOutputStream;
import java.util.Optional;
import java.util.zip.Deflater;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.example.demo.exception.*;
import com.example.demo.model.*;
import com.example.demo.repository.*;

@Service
public class UserService {

	@Autowired
    private UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public void registerUser(User user) throws UserExistsException {
        Optional<User> optUser = userRepo.findById(user.getEmail());
        if (optUser.isPresent()) {
            throw new UserExistsException();
        }
        String hashpw =
                BCrypt.hashpw(user.getPassword(),
                        BCrypt.gensalt());
        System.out.println(hashpw);
        user.setPassword(hashpw);
        
        userRepo.save(user);
        
    }

    public User login(String email, String password) {
        Optional<User> userSearch =
                userRepo.findById(email);
        User user = null;
        if(userSearch.isPresent()) {
            user = userSearch.get();
            boolean matched = BCrypt.checkpw(password, user.getPassword());
            if(!matched) {
                user = null;
            }
        }
        return user;
    }
    

    public Optional<User> getregistrationbyemail(String email) {
        Optional<User> userSearch =
                userRepo.findById(email);
        User user = null;
        if(userSearch.isPresent()) {
            user = userSearch.get();
            
            return userSearch;
        }
        return Optional.ofNullable(user);
    }
    

}