package com.example.fullstackapplication.Full.Stack.Application.helloWorld;

public class HelloWorldBean {
	
	public int id;
	public String name;
	public String author;
	
	
	public HelloWorldBean(int id, String name, String author) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	@Override
	public String toString() {
		return "HelloWorldBean [id=" + id + ", name=" + name + ", author=" + author + "]";
	}

	
	
}
