package com.example.fullstackapplication.Full.Stack.Application.shop;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class ShopResource {
	
	private ShoppingService shoppingService;
	
	public ShopResource(ShoppingService shoppingService) {
		super();
		this.shoppingService = shoppingService;
	}
	
	@GetMapping("/users/{username}/shop")
	public List<Shopping> retrieveGroceries(@PathVariable String username) {
			return shoppingService.findByUsername(username); 
	}
	
	@GetMapping("/users/{username}/shop/{id}")
	public Shopping retrieveGroceriesById(@PathVariable String username, @PathVariable int id) {
			return shoppingService.findById(id); 
	}
	
	@DeleteMapping("/users/{username}/shop/{id}")
	public ResponseEntity<Void> deleteGrocery(@PathVariable String username, @PathVariable int id) {
			 shoppingService.deleteById(id); 
			 return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/shop/{id}")
	public Shopping updateGrocery(@PathVariable String username, @PathVariable Integer id, @RequestBody Shopping shop) {
		 shoppingService.updateShop(shop);
		 return shop;
	} 
	
	@PostMapping("/users/{username}/shop")
	public Shopping createGrocery(@PathVariable String username, @RequestBody Shopping shop) {
		 shoppingService.addGrocery(username,shop.getDescription(),shop.getDate(),shop.getAvailable());
		 return shop;
	}
}
 