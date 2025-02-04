package com.project.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Enquiry;
import com.project.Services.EnquiryService;

@RestController
@RequestMapping("/api/enquiry")
public class EnquiryController {
	
	@Autowired
	private EnquiryService enquiryService;

	@GetMapping("/getById/{enquiryId}")
	public ResponseEntity<Enquiry> getEnquiryById(@PathVariable int enquiryId) {
		Optional<Enquiry> enquiry = enquiryService.getEnquiryById(enquiryId);
		if (enquiry.isPresent())
			return new ResponseEntity<>(enquiry.get(), HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}

	@GetMapping("/all")
	public List<Enquiry> getAllEnquiries() {
		return enquiryService.getAllEnquiries();
	}

	@PostMapping("/add")
	public ResponseEntity<Enquiry> addEnquiry(@RequestBody Enquiry enquiry) {
		Enquiry enquiry1 = enquiryService.addEnquiry(enquiry);
		return ResponseEntity.status(HttpStatus.CREATED).body(enquiry1);
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateEnquiry(@RequestBody Enquiry enquiry) {
		boolean isUpdated = enquiryService.updateEnquiry(enquiry);
		if (isUpdated)
			return new ResponseEntity<>("Enquiry Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the Enquiry", HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/delete/{enquiryId}")
	public ResponseEntity<String> deleteEnquiry(@PathVariable int enquiryId) {
		enquiryService.deleteEnquiry(enquiryId);
		return ResponseEntity.ok().body("Enquiry Closed");
	}
}
