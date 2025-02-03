package com.project.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Batch;
import com.project.Services.BatchService;

@RestController
@RequestMapping("api/batch")
public class BatchController {
	
	@Autowired
	private BatchService batchService;
	
	@GetMapping("/getById/{batchId}")
	public ResponseEntity<Batch> getBatchById(@PathVariable int batchId){
		Optional<Batch> foundBatch = batchService.getBatchById(batchId);
		if(foundBatch.isPresent())
			return new ResponseEntity<>(foundBatch.get(),HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/all")
	public List<Batch> getAllBatches(){
		return batchService.getAllBatches();
	}
	
	@PostMapping("/add")
	public ResponseEntity<Batch> addBatch(@RequestBody Batch batch){
		Batch batch2=batchService.addBatch(batch);
		return ResponseEntity.status(HttpStatus.CREATED).body(batch2);	
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateBatch(@RequestBody Batch batch){
		boolean isUpdated = batchService.updateBatch(batch);
		if(isUpdated)
			return new ResponseEntity<>("Batch Updated Successfully",HttpStatus.OK);
		else 
			return new ResponseEntity<>("There was a problem updating the ",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/delete/{batchId}")
	public ResponseEntity<String> deleteBatch(@PathVariable int batchId){
		batchService.deleteBatch(batchId);
		return ResponseEntity.ok().body("Batch Deleted");
	}
	
	@GetMapping("/getByName/{batchName}")
	public ResponseEntity<Batch> findByBatchName(@PathVariable String batchName){
		Optional<Batch> foundBatch = batchService.findByBatchName(batchName);
		if(foundBatch.isPresent())
			return new ResponseEntity<>(foundBatch.get(),HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}

	@PutMapping("/activate/{batchIsActive}/{batchId}")
	public ResponseEntity<String> activateBatch(@PathVariable boolean batchIsActive, @PathVariable int batchId){
		batchService.activateBatch(batchIsActive, batchId);
		return ResponseEntity.ok().body("Batch Activation Toggled");
	}
}
