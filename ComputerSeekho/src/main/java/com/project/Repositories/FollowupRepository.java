package com.project.Repositories;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.Entities.Followup;

public interface FollowupRepository extends JpaRepository<Followup, Integer>{
	List<Followup> findByFollowupDate(LocalDate followupDate);
}
