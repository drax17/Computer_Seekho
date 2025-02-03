package com.project.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Entities.Staff;
import com.project.Repositories.StaffRepository;
@Service
public class StaffServiceImpl implements StaffService {
	
	@Autowired
	private StaffRepository staffRepository;

	@Override
	public Optional<Staff> getStaffById(int staffId) {
		return staffRepository.findById(staffId);
	}

	@Override
	public Optional<Staff> getStaffByUsername(String staffUsername) {
		return staffRepository.findByStaffUsername(staffUsername);
	}

	@Override
	public List<Staff> getAllStaffMembers() {
		return staffRepository.findAll();
	}

	@Override
	public Staff addStaff(Staff staff) {
		return staffRepository.save(staff);
	}

	@Override
	public Staff updateStaff(Staff staff) {
		return staffRepository.save(staff);		
	}

	@Override
	public void deleteStaff(int staffId) {
		staffRepository.deleteById(staffId);

	}

}
