package com.epicode.Spring.main.repositories;

import org.springframework.data.repository.CrudRepository;

import com.epicode.Spring.main.entity.Brand;

public interface BrandRepository extends CrudRepository<Brand, String> {

}
