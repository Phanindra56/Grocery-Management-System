package com.example.fullstackapplication.Full.Stack.Application.shop;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingRepository extends JpaRepository <Shopping, Integer> {
	//we can add custom methods also in spring jpa
	//we need to follow naming convention
//	List<Shopping> findByAuthor(String Author);
	List<Shopping> findByUsername(String username);
//	List<Shopping> getByUname(String uname);
//	Optional<Shopping> findById(Integer id);
}