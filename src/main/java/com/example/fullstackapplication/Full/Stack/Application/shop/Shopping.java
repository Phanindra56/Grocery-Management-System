package com.example.fullstackapplication.Full.Stack.Application.shop;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


//For now we create a static list then we use a real db called h2 and mysql
//Static list of shopping
@Entity
public class Shopping {
	public Shopping() {
		 
	}
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String username;
	
	private String description;
	private LocalDate date;
	private boolean available;
	
	
	public Shopping(Integer id, String username, String description, LocalDate date, boolean available) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.date = date;
		this.available = available;
	}
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public boolean getAvailable() {
		return available;
	}
	public void setAvailable(boolean available) {
		this.available = available;
	}


	@Override
	public String toString() {
		return "Shopping [id=" + id + ", username=" + username + ", description=" + description + ", date=" + date
				+ ", available=" + available + "]";
	}
}
