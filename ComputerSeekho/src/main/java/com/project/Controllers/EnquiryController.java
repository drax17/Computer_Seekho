package com.project.Controllers;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Enquiry;
import com.project.Entities.ResponseDTO;
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
	public ResponseEntity<ResponseDTO> addEnquiry(@RequestBody Enquiry enquiry) {
		enquiryService.addEnquiry(enquiry);
		return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDTO("Enquiry Added",new Date()));
	}

	@PutMapping("/update")
	public ResponseEntity<ResponseDTO> updateEnquiry(@RequestBody Enquiry enquiry) {
		boolean isUpdated = enquiryService.updateEnquiry(enquiry);
		if (isUpdated)
			return new ResponseEntity<>(new ResponseDTO("Enquiry Updated",new Date()), HttpStatus.OK);
		else
			return new ResponseEntity<>(new ResponseDTO("There was a problem updating the Enquiry", new Date()), HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/delete/{enquiryId}")
	public ResponseEntity<ResponseDTO> deleteEnquiry(@PathVariable int enquiryId) {
		enquiryService.deleteEnquiry(enquiryId);
		return ResponseEntity.ok().body(new ResponseDTO("Enquiry Deleted", new Date()));
	}
	
	@GetMapping("/getByStaff/{staffId}")
	public ResponseEntity<List<Enquiry>> getbystaff(@PathVariable int staffId) {
		List<Enquiry> enquiry = enquiryService.getbystaff(staffId);
		if (enquiry.isEmpty())
			return ResponseEntity.notFound().build();
		else
			return new ResponseEntity<>(enquiry, HttpStatus.OK);
	}
}
