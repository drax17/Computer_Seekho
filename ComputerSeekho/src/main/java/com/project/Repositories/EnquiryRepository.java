package com.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.Entities.Enquiry;
// import com.project.Entities.Staff;

import java.util.List;
import java.time.LocalDate;

@Repository
@Transactional
public interface EnquiryRepository extends JpaRepository<Enquiry, Integer> {
	List<Enquiry> findByEnquiryDate(LocalDate enquiryDate);

	@Query(value = """
			select * from Enquiry where Enquiry.staff_id = ?1 AND Enquiry.follow_up_date = CURDATE()
			""", nativeQuery = true)
	public List<Enquiry> getbystaff(int staffId);

	// List<Enquiry> findByStaff(Staff staff);
}
