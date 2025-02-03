package com.project.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.Entities.Staff;
import com.project.Repositories.StaffRepository;
@Service
public class StaffServiceImpl implements StaffService {
	
	@Autowired
	private StaffRepository staffRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

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
		staff.setStaffRole("ROLE_ADMIN");
		staff.setStaffUsername("userroot");
		staff.setStaffPassword(passwordEncoder.encode("rootpassword"));
		return staffRepository.save(staff);
	}

	@Override
	public boolean updateStaff(Staff staff) {
		String password = passwordEncoder.encode(staff.getStaffPassword());
		staff.setStaffPassword(password);
		Optional<Staff> foundStaff = staffRepository.findById(staff.getStaffId());
		if(foundStaff.isPresent()) {
			staffRepository.save(staff);
			return true;
		}
		else return false;
	}

	@Override
	public void deleteStaff(int staffId) {
		staffRepository.deleteById(staffId);
	}
}
