package com.example.fullstackapplication.Full.Stack.Application.security;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	//Filter chain
	
	//disabling csrf(cross site request forgery)
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		//Response to preFlight request doesn't pass access control check
		//basic auth
		
		
//		authenticate all requests
		//Response to preFlight request doesn't pass access control check
		http.authorizeHttpRequests(auth -> auth
				.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.anyRequest().authenticated());
		//when we override the secuirty filter chain, we need to define entire chain again
		// here we are overriding with our default credentials
		//basic authentication
		http.httpBasic(withDefaults());
//		http.formLogin(withDefaults());
		//stateless rest api
		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//		http.headers().frameOptions().disable();
		//disabling csrf
		http.csrf().disable();
		return http.build();
		
//		return http
//			.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
//			.requestMatchers(HttpMethod.OPTIONS, "/**").anyRequest().authenticated()
//			.httpBasic(withDefaults())
//			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//			.csrf().disable()
//			.build();
				
		
	}
}
