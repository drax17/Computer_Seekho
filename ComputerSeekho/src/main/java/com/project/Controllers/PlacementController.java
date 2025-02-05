package com.project.Controllers;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entities.Placement;
import com.project.Entities.ResponseDTO;
import com.project.Services.PlacementService;

@RestController
@RequestMapping("/api/placement")
public class PlacementController {
    @Autowired
    private PlacementService placementService;

    @GetMapping("/getById/{id}")
    public ResponseEntity<Placement> getPlacement(@PathVariable int id) {
        Optional<Placement> foundPlacement = placementService.getPlacementById(id);
        if(!foundPlacement.isPresent()) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.status(200).body(foundPlacement.get());
    }

    @GetMapping("/all")
    public ResponseEntity<List<Placement>> getAllPlacements() {
        List<Placement> placements = placementService.getAllPlacements();
        if(placements == null) {
            return ResponseEntity.status(200).body(null);
        }
        return ResponseEntity.status(200).body(placements);
    }

//    @GetMapping("/student/{studentId}")
//    public ResponseEntity<Placement> getPlacementsByStudent(@PathVariable int studentId) {
//        Optional<Placement> placement = placementService.getbyStudent(studentId);
//        if(placement.isEmpty()) {
//            return ResponseEntity.status(404).body(null);
//        }
//        return ResponseEntity.status(200).body(placement.get());
//    }

    @PostMapping("/add")
    public ResponseEntity<ResponseDTO> addPlacement(@RequestBody Placement placement) {
        placementService.addPlacement(placement);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDTO("Placement Details Added",new Date()));
    }
}