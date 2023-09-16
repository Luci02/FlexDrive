package com.epicode.Spring.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.Spring.security.entity.User;
import com.epicode.Spring.security.payload.JWTAuthResponse;
import com.epicode.Spring.security.payload.LoginDto;
import com.epicode.Spring.security.payload.RegisterDto;
import com.epicode.Spring.security.repository.RoleRepository;
import com.epicode.Spring.security.repository.UserRepository;
import com.epicode.Spring.security.service.AuthService;
import com.fasterxml.jackson.annotation.JsonIgnore;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
	
	@Autowired UserRepository userRepo;
	@Autowired RoleRepository roleRepo;

    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Build Login REST API
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
           	
    	String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setUsername(loginDto.getUsername());
        jwtAuthResponse.setAccessToken(token);
        
//        Logica per capire se è un admin
        User u = userRepo.findByUsername(jwtAuthResponse.getUsername()).get();
        jwtAuthResponse.setAdmin(u.isAdmin());

        return ResponseEntity.ok(jwtAuthResponse);
    }

    // Build Register REST API
    @PostMapping(value = {"/register", "/signup"})
    @JsonIgnore
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    // JSON inviato dal Client
    /*{
        "name": "Giuseppe",
        "username": "giuseppevardi",
        "email": "g.verdi@example.com",
        "password": "qwerty",
        "roles": ["MODERATOR", "ADMIN"]
    }*/
}
