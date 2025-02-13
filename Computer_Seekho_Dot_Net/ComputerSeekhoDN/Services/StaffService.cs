using ComputerSeekhoDN.Exceptions;
using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace ComputerSeekhoDN.Services
{
	public class StaffService : IStaffService
	{
		private readonly ComputerSeekhoDBContext csdbContext;
		public StaffService(ComputerSeekhoDBContext csdbcontext) {
			this.csdbContext = csdbcontext;
		}

		public async Task<Staff> addStaff(Staff staff)
		{
			staff.StaffPassword = BCrypt.Net.BCrypt.HashPassword("rootpassword");
			staff.StaffUsername = staff.StaffEmail;
			staff.StaffRole = "ROLE_"+staff.StaffRole;
			csdbContext.Add(staff);
			await csdbContext.SaveChangesAsync();
			return staff;
		}

		public async Task<bool> deleteStaff(int staffId)
		{
			Staff staff = csdbContext.Staff.Find(staffId);
			if (staff == null) {
				throw new NotFound($"Staff with Id: {staffId} does not exist");
			}
			csdbContext.Staff.Remove(staff);
			await csdbContext.SaveChangesAsync();
			return true;
		}

		public async Task<ActionResult<IEnumerable<Staff>>> getAllStaffMembers()
		{
			return await csdbContext.Staff.ToListAsync();
		}

		public async Task<ActionResult<IEnumerable<Staff>>> getAllTeachingStaff()
		{
			//IEnumerable<Staff> teachingStaffs = await csdbContext.Staff.FromSql();
			throw new NotImplementedException();
		}

		public async Task<ActionResult<Staff>> getStaffById(int staffId)
		{
			return await csdbContext.Staff.FindAsync(staffId);
		}

		public async Task<ActionResult<Staff>> getStaffByUsername(string staffUsername)
		{
			Staff staff = await csdbContext.Staff.FirstOrDefaultAsync(staff => staff.StaffUsername == staffUsername);
			return staff;
		}

		public async Task<int> getStaffIdByStaffUsername(string staffUsername)
		{
			Staff staff = await csdbContext.Staff.FirstOrDefaultAsync(staff => staff.StaffUsername == staffUsername);
			return staff.StaffId;
		}

		public async Task<bool> updateStaff(Staff staff)
		{
			int staffId = staff.StaffId;
			staff.StaffPassword = BCrypt.Net.BCrypt.HashPassword(staff.StaffPassword);
			csdbContext.Entry(staff).State = EntityState.Modified;
			try
			{
				await csdbContext.SaveChangesAsync();
			}
			catch (DBConcurrencyException ex) {
				if (!staffExists(staffId))
				{
					throw new NotFound($"Staff with Id: {staffId} does not exist");
				}
				else {
					Console.WriteLine(ex.Message);
					throw;
				}
			}
			return true;
		}

		//public Task<bool> updateStaffUserNamePassword(string staffUsername, string staffPassword, int staffId)
		//{
		//	throw new NotImplementedException();
		//}


		private bool staffExists(int id)
		{
			return csdbContext.Staff.Find(id) != null;
		}
	}
}
