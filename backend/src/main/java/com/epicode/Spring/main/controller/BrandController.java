package com.epicode.Spring.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.Spring.main.service.BrandService;

@RestController
@RequestMapping("/api/brand")
public class BrandController {
	
	@Autowired BrandService BrandSvc;
	
	@GetMapping
	public ResponseEntity<List<String>> getAllBrand() {
		return new ResponseEntity<List<String>>(BrandSvc.getAllBrands(), HttpStatus.OK);
	}
	
	@PostMapping
	public HttpStatus addBrand(@RequestBody String name) {
		return BrandSvc.addBrand(name);
	}
	
	@DeleteMapping("/{brand-name}")
	public HttpStatus deleteBrand(
			@PathVariable(name = "brand-name") String name
			) {
		return BrandSvc.removeBrand(name);
	}

}
