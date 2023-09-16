package com.epicode.Spring.main.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.epicode.Spring.main.entity.Brand;
import com.epicode.Spring.main.entity.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
	
	public Page<Vehicle> findAllByBrand(Brand brand, Pageable pageable);
	
}
