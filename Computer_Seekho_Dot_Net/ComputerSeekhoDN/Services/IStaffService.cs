using ComputerSeekhoDN.Models;
using Microsoft.AspNetCore.Mvc;

namespace ComputerSeekhoDN.Services
{
	public interface IStaffService
	{
		Task<ActionResult<Staff>> getStaffById(int staffId);
		Task<ActionResult<Staff>> getStaffByUsername(String staffUsername);
		Task<ActionResult<IEnumerable<Staff>>> getAllStaffMembers();
		Task<Staff> addStaff(Staff staff);
		Task<bool> updateStaff(Staff staff);
		Task<bool> deleteStaff(int staffId);
		//Task<bool> updateStaffUserNamePassword(String staffUsername, String staffPassword, int staffId);
		Task<int> getStaffIdByStaffUsername(String staffUsername);
		Task<ActionResult<IEnumerable<Staff>>> getAllTeachingStaff();
	}
}
