package com.project.Repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.DTO.PlacedStudentDTO;
import com.project.Entities.Placement;

import jakarta.transaction.Transactional;
import java.util.List;
// import java.util.Optional;

@Repository
@Transactional
public interface PlacementRepository extends JpaRepository<Placement, Integer> {
    // Optional<Placement> findByStudentID(int studentID);
    @Query("SELECT new com.project.DTO.PlacedStudentDTO( " +
            "p.batch.batchId, p.batch.batchName , p.studentID.studentName ,p.studentID.photoUrl, p.recruiterID.recruiterName) "
            +
            "FROM Placement p " +
            "JOIN p.batch b " +
            "JOIN p.studentID s " +
            "JOIN p.recruiterID r " +
            "ORDER BY p.batch.batchId")
    List<PlacedStudentDTO> fetchPlacedStudents();

    @Query("SELECT new com.project.DTO.PlacedStudentDTO( " +
            "p.batch.batchId, p.batch.batchName , p.studentID.studentName ,p.studentID.photoUrl, p.recruiterID.recruiterName) "
            +
            "FROM Placement p " +
            "JOIN p.batch b " +
            "JOIN p.studentID s " +
            "JOIN p.recruiterID r " +
            "WHERE p.batch.batchId = :batchId " +
            "ORDER BY p.batch.batchId")
    List<PlacedStudentDTO> findByBatchId(Integer batchId);
}