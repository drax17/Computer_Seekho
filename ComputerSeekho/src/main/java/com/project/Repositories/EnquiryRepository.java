package com.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.Entities.Enquiry;
import java.util.List;
import java.time.LocalDate;


@Repository
@Transactional
public interface EnquiryRepository extends JpaRepository<Enquiry, Integer>{
	List<Enquiry> findByEnquiryDate(LocalDate enquiryDate);
}
