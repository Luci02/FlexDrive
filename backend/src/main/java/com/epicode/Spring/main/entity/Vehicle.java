package com.epicode.Spring.main.entity;

import com.epicode.Spring.main.enumerated.EngineType;
import com.epicode.Spring.main.enumerated.Transmission;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "vehicles")
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Integer price;
	
	private String imgPath;
	
	@ManyToOne
	private Brand brand;
	private String model;
	private String trim;
	
	private Integer mileage;
	
	@Column(name = "engine_type")
	@Enumerated(EnumType.STRING)
	private EngineType engineType;
	
	private Integer rentDuration;
	
	@Enumerated(EnumType.STRING)
	private Transmission transmission;

}
