package com.example.demo;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;

import com.example.demo.exception.UserExistsException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@SpringBootTest
class SpringSecurityApplicationTests {

	@Autowired
	private UserService service;
	@MockBean
	private UserRepository Userrepository;
	
	@Test
	void contextLoads() {
		 
	}
	
	@Test
	public void Testgetregistrationbyemail() {
		String email ="ramesh12@gmail.com";
		when(Userrepository.findById(email)).thenReturn(Optional.of(new User("ramesh12@gmail.com","ram","passwrd345","img123")));
		assertEquals(true,service.getregistrationbyemail(email).isPresent());
	}
	
	@Test
    public void TestisEmptygetregistrationbyemail() {
        String email ="ramesh12@gmail.com";
        when(Userrepository.findById(email)).thenReturn(Optional.of(new User("ramesh12@gmail.com","ram","passwrd345","img123")));
        assertEquals(false,service.getregistrationbyemail(email).isEmpty());
    }
	
	@Test
    public void testMockCreation(){
        assertNotNull(Userrepository);
        
    }

}