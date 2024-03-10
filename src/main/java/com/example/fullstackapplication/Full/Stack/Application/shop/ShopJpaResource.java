package com.example.fullstackapplication.Full.Stack.Application.shop;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ShopJpaResource {
	
	private ShoppingService shoppingService;
	private ShoppingRepository shoppingRepository;
	
	public ShopJpaResource(ShoppingService shoppingService,ShoppingRepository shoppingRepository) {
		super();
		this.shoppingService = shoppingService;
		this.shoppingRepository = shoppingRepository;
	}
	
	@GetMapping("/users/{username}/shop")
	public List<Shopping> retrieveGroceries(@PathVariable String username) {
			return shoppingRepository.findByUsername(username); 
	}
	
	@GetMapping("/users/{username}/shop/{id}")
	public Shopping retrieveGroceriesById(@PathVariable String username, @PathVariable int id) {
			return shoppingRepository.findById(id).get(); 
	}
	
	@DeleteMapping("/users/{username}/shop/{id}")
	public ResponseEntity<Void> deleteGrocery(@PathVariable String username, @PathVariable int id) {
		shoppingRepository.deleteById(id); 
			 return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/shop/{id}")
	public Shopping updateGrocery(@PathVariable String username, @PathVariable Integer id, @RequestBody Shopping shop) {
		shoppingRepository.save(shop);
		 return shop;
	} 
	
	@PostMapping("/users/{username}/shop")
	public Shopping createGrocery(@PathVariable String username, @RequestBody Shopping shop) {
		shop.setUsername(username);
		shop.setId(null);
		return shoppingRepository.save(shop);
//		Shopping createGrocery = shoppingRepository.addGrocery(username,shop.getDescription(),shop.getDate(),shop.getAvailable());
//		 return shop;
	}
}
 