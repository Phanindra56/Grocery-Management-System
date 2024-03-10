package com.example.fullstackapplication.Full.Stack.Application.helloWorld;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@GetMapping(path= "/basicAuth")
	public String basicAuthCheck()
	{
		return "success";
	}
	
	
	@GetMapping(path= "/hello-world")
	public String helloWorld()
	{
		return "Hello World";
	}
	
	
	@GetMapping(path= "/hello-world-bean")
	public List<HelloWorldBean> retrieveAllBeans(){
		return Arrays.asList(
				new HelloWorldBean(1,"Spring Boot","Phani"),
				new HelloWorldBean(2,"MySQL","Wayne"),
				new HelloWorldBean(3,"MicroServices","Bruce")
				);
	}
	
	@GetMapping(path= "/hello-world-/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
		return new HelloWorldBean(1, String.format("%s",name),"phani");
	}
	
}
