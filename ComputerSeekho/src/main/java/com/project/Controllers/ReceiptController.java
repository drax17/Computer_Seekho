package com.project.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Receipt;
import com.project.Services.ReceiptService;

@RestController
@RequestMapping("/api/receipt")
public class ReceiptController {
	
	@Autowired
	private ReceiptService receiptService;
	
	@GetMapping("/getById/{receiptId}")
	public ResponseEntity<Receipt> getReceiptById(@PathVariable int receiptId){
		Optional<Receipt> receipt = receiptService.getReceiptById(receiptId);
		if (receipt.isPresent())
			return new ResponseEntity<>(receipt.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/all")
	public List<Receipt> getAllReceipts(){
		return receiptService.getAllReceipts();
	}
	
	@PostMapping("/add")
	public ResponseEntity<Receipt> addReceipt(@RequestBody Receipt recept){
		Receipt receipt2 = receiptService.addReceipt(recept);
		return ResponseEntity.status(HttpStatus.CREATED).body(receipt2);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateService(@RequestBody Receipt receipt){
		boolean isUpdated = receiptService.updateReceipt(receipt);
		if (isUpdated)
			return new ResponseEntity<>("Receipt Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the Receipt", HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/delete/{receiptId}")
	public ResponseEntity<String> deleteReceipt(@PathVariable int receiptId){
		receiptService.deleteReceipt(receiptId);
		return ResponseEntity.ok().body("Receipt deleted");
	}
}
