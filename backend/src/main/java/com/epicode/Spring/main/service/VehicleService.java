package com.epicode.Spring.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.epicode.Spring.main.entity.Brand;
import com.epicode.Spring.main.entity.Vehicle;
import com.epicode.Spring.main.repositories.BrandRepository;
import com.epicode.Spring.main.repositories.VehicleRepository;

@Service
public class VehicleService {
	
	@Autowired BrandRepository BrandRepo;
	@Autowired VehicleRepository VehicleRepo;
	
	public Vehicle addVehicle(Vehicle v) {
		
		if( !BrandRepo.existsById(v.getBrand().getName()) ) {
			BrandRepo.save(v.getBrand());
		}
		
		return VehicleRepo.save(v);
	}
	
	public Page<Vehicle> getAllVehicles(Pageable pageable) {
		return VehicleRepo.findAll(pageable);
	}
	
	public Page<Vehicle> getAllVehiclesByBrand(Brand b, Pageable p) {
		return VehicleRepo.findAllByBrand(b, p);
	}
	
	public Vehicle getSingleVehicle(Long id) {
		return VehicleRepo.findById(id).get();
	}
	
	public void removeVehicle(Long id) {
		VehicleRepo.deleteById(id);
	}

}
