package com.epicode.Spring.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.Spring.main.entity.Brand;
import com.epicode.Spring.main.entity.Vehicle;
import com.epicode.Spring.main.service.VehicleService;

@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {
	
	@Autowired VehicleService vSvc;
	
	@GetMapping
	public ResponseEntity<Page<Vehicle>> getAllVehicles(Pageable pageable) {
		return new ResponseEntity<Page<Vehicle>>(vSvc.getAllVehicles(pageable), HttpStatus.OK);
	}
	
	@GetMapping("/byBrand/{brand}")
	public ResponseEntity<Page<Vehicle>> getAllVehiclesByBrand(
			@PathVariable(name = "brand") String brandName, 
			Pageable pageable
	) {
		Brand b = new Brand(brandName);
		return new ResponseEntity<Page<Vehicle>>(vSvc.getAllVehiclesByBrand(b, pageable), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Vehicle> getSingleVehicle(@PathVariable Long id) {
		return new ResponseEntity<Vehicle>(vSvc.getSingleVehicle(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Vehicle> addVehicle( @RequestBody Vehicle v ) {
		return new ResponseEntity<Vehicle>(vSvc.addVehicle(v), HttpStatus.OK);
	}

}
