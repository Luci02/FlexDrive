package com.epicode.Spring.main.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.epicode.Spring.main.entity.Brand;
import com.epicode.Spring.main.repositories.BrandRepository;

@Service
public class BrandService {
	
	@Autowired BrandRepository BrandRepo;
	
	public HttpStatus addBrand(String name) {
		BrandRepo.save(new Brand(name));
		return HttpStatus.OK;
	}
	
	public Brand getSingleBrand(String name) {
		return BrandRepo.findById(name).get();
	}
	
	public List<String> getAllBrands() {
		List<Brand> brandList = (List<Brand>) BrandRepo.findAll();
		List<String> b = new ArrayList<String>();
		brandList.forEach( brand -> {
			b.add(brand.getName());
		});
		return b;
	}
	
	public HttpStatus removeBrand(String name) {
		BrandRepo.deleteById(name);
		return HttpStatus.OK;
	}

}
