package com.project.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DTO.PlacementDTO;
import com.project.Entities.Placement;
import com.project.Repositories.PlacementRepository;

@Service
public class PlacementServiceImpl implements PlacementService {
    @Autowired
    private PlacementRepository placementRepository;

    @Override
    public Placement addPlacement(Placement placement) {
        return placementRepository.save(placement);
    }

    @Override
    public Optional<Placement> getPlacementById(int placementId) {
        return placementRepository.findById(placementId);
    }

    @Override
    public List<Placement> getAllPlacements() {
        return placementRepository.findAll();
    }

    @Override
    public List<PlacementDTO> getPlacedStudent(){
        return placementRepository.fetchPlacedStudents();
    }

    @Override
    public List<PlacementDTO> getPlacedStudentById(int batchId){
        return placementRepository.findByBatchId(batchId);
    }
}