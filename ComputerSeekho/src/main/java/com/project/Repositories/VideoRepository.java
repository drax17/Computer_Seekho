package com.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Entities.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Integer>{
	
}
