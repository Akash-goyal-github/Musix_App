package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userstable")
public class User {
    @Id
    @Column(columnDefinition = "varchar(255)")
    private String email;
    private String name;
    private String password;
    private String image;
   // private String role;
    
    public User() {}
    
    
    public User(String email, String name, String password, String image) {
	super();
	this.email = email;
	this.name = name;
	this.password = password;
	this.image = image;
    }


	public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
	public String getImage() {
		return image;
	}
	
	public void setImage(String image) {
		this.image = image;
	}
    

        
    

}
