package com.project.Controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Staff;
import com.project.Services.StaffService;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

	@Autowired
	private StaffService staffService;
	
	@GetMapping("/all")
	public List<Staff> getAllStaffMembers(){
		return staffService.getAllStaffMembers();
	}
	
	@GetMapping("/getById/{staffId}")
	public  ResponseEntity<Staff> getStaffById(@PathVariable int staffId){
		Optional<Staff> staff = staffService.getStaffById(staffId);
		if (staff.isPresent())
			return new ResponseEntity<>(staff.get(), HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/add")
	public ResponseEntity<Staff> addStaff(@RequestBody Staff staff){
		Staff staff1 = staffService.addStaff(staff);
		return ResponseEntity.status(HttpStatus.CREATED).body(staff1);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateAlbum(@RequestBody Staff staff) {
		boolean isUpdated = staffService.updateStaff(staff);
		if (isUpdated)
			return new ResponseEntity<>("Staff Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the staff", HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/delete/{staffId}")
	public ResponseEntity<String> deleteAlbum(@PathVariable int staffId) {
		staffService.deleteStaff(staffId);
		return ResponseEntity.ok().body("Staff Deleted");
	}
}
