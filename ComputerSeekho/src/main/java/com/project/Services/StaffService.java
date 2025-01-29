package com.project.Services;

import java.util.*;

import com.project.Entities.Staff;

public interface StaffService {
	Optional<Staff> getStaffById(int staffId);
	Optional<Staff> getStaffByUsername(String staffUsername);
	List<Staff> getAllStaffMembers();
	Staff addStaff(Staff staff);
	Staff updateStaff(Staff staff);
	void deleteStaff(int staffId);
}
