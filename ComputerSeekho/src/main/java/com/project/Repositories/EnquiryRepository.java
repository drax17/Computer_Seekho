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
			select * from Enquiry where Enquiry.staff_id = (select staff_id from Staff where staff_username = :staffUsername) ORDER BY follow_up_date DESC
			""", nativeQuery = true)
	public List<Enquiry> getbystaff(String staffUsername);
}
