package com.project.Controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Staff;
import com.project.Services.StaffService;

@RestController
@RequestMapping("/staff")
public class StaffController {

	@Autowired
	private StaffService staffService;
	
	@GetMapping("/all")
	public List<Staff> getAllStaffMembers(){
		return staffService.getAllStaffMembers();
	}
	
	@GetMapping("/{id}")
	public  ResponseEntity<Staff> getStaffById(@PathVariable int staffId){
		Optional<Staff> staff = staffService.getStaffById(staffId);
		return ResponseEntity.status(HttpStatus.OK).body(staff.get());
	}
	
	@PostMapping("/add")
	public ResponseEntity<Staff> addStaff(@RequestBody Staff staff){
		Staff staff2 = staffService.addStaff(staff);
		return null;
	}
}
