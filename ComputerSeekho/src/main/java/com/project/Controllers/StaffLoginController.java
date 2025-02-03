package com.project.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class StaffLoginController {
	@PostMapping("/signIn")
	ResponseEntity<String> signIn(){
		return ResponseEntity.ok("Sign in Successfull");
	}
}
