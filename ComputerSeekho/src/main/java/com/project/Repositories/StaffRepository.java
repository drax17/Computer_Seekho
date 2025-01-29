package com.project.Repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.Entities.Staff;


@Repository
@Transactional
public interface StaffRepository extends JpaRepository<Staff, Integer>{
	Optional<Staff> findByStaffUsername(String staffUsername);
}
