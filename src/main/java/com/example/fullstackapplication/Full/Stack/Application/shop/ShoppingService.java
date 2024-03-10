package com.example.fullstackapplication.Full.Stack.Application.shop;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class ShoppingService {
	
	private static List<Shopping>  shopList = new ArrayList<>();
	private static int groceryCount=0;
	static {
		shopList.add(new Shopping(++groceryCount,"phani","Sugar",LocalDate.now().plusDays(2),true));
		shopList.add(new Shopping(++groceryCount,"phani","Rice",LocalDate.now().plusDays(1),false));
		shopList.add(new Shopping(++groceryCount,"phani","Wheat",LocalDate.now().plusDays(1),true));
		shopList.add(new Shopping(++groceryCount,"phani","Flour",LocalDate.now().plusDays(2),false));
	}
	
	public List<Shopping> findByUsername(String username){
		Predicate<? super Shopping> predicate = shopList -> shopList.getUsername().equalsIgnoreCase(username);
		return shopList.stream().filter(predicate).toList();

	}
	
	public void addGrocery(String username,String description,LocalDate date,boolean available) {
		Shopping newShop = new Shopping(++groceryCount,username,description,date,available);
		shopList.add(newShop);
	}
	
	public void deleteById(int id) {
		Predicate<? super Shopping> predicate = newShop -> newShop.getId()==id;
		//Predicate is a condition when to remove the todo
		//when to remove is when the id gets matches with todo.getID()
		shopList.removeIf(predicate);		
	}

	public Shopping findById(int id) {
		Predicate<? super Shopping> predicate = newShop -> newShop.getId()==id;
		Shopping newShop = shopList.stream().filter(predicate).findFirst().get();
		return newShop;
	}
	
	public void updateShop(@Valid Shopping shop) {
		deleteById(shop.getId());
		shopList.add(shop);	
	}

	
	
}
