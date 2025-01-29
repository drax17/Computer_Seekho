package com.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.Entities.Course;

@Repository
@Transactional
public interface CourseRepository extends JpaRepository<Course, Integer>{
	
}
