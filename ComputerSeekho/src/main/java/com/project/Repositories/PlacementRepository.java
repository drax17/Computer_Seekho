package com.project.Repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.Entities.Placement;

import jakarta.transaction.Transactional;
// import java.util.List;
// import java.util.Optional;


@Repository
@Transactional
public interface PlacementRepository extends JpaRepository<Placement, Integer> {
//    Optional<Placement> findByStudentID(int studentID);
    
}