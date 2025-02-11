package com.project.Services;


import com.project.DTO.PlacementDTO;
import com.project.Entities.Placement;
import java.util.List;
import java.util.Optional;

public interface PlacementService {
    Placement addPlacement(Placement placement);
    Optional<Placement> getPlacementById(int placementId);
    List<Placement> getAllPlacements();
    List<PlacementDTO> getPlacedStudentById(int batchId);
    List<PlacementDTO> getPlacedStudent();
}
