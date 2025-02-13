using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Services;
using Microsoft.AspNetCore.Mvc;

namespace ComputerSeekhoDN.Controllers
{
	[Route("api/staff")]
	[ApiController]
	public class StaffController : ControllerBase
	{
		private readonly IStaffService _staffService;

		public StaffController(IStaffService staffService)
		{
			_staffService = staffService;
		}

		[HttpGet("all")]
		public async Task<ActionResult<IEnumerable<Staff>>> GetAllStaffMembers()
		{
			return await _staffService.getAllStaffMembers();
		}

		[HttpGet("getById/{id}")]
		public async Task<ActionResult<Staff>> GetStaffById(int id)
		{
			var staff = await _staffService.getStaffById(id);
			if (staff == null)
			{
				return NotFound(new { message = "Staff not found" });
			}
			return staff;
		}

		[HttpPost("add")]
		public async Task<ActionResult<Staff>> AddStaff([FromBody] Staff staff)
		{
			if (staff == null)
			{
				return BadRequest(new { message = "Invalid staff data" });
			}

			var newStaff = await _staffService.addStaff(staff);
			return CreatedAtAction(nameof(GetStaffById), new { id = newStaff.StaffId }, newStaff);
		}

		[HttpPut("/update")]
		public async Task<IActionResult> UpdateStaff([FromBody] Staff staff)
		{
			var updatedStaff = await _staffService.updateStaff(staff);
			if (!updatedStaff)
			{
				return NotFound(new { message = "Staff not found for update"});
			}

			return Ok(new {message = "Staff Updated"});
		}

		[HttpDelete("delete/{id}")]
		public async Task<IActionResult> DeleteStaff(int id)
		{
			bool result = await _staffService.deleteStaff(id);
			if (!result)
			{
				return NotFound(new { message = "Staff not found for deletion" });
			}
			return Ok();
		}


		[HttpGet("getIdByName/{username}")]
		public async Task<ActionResult<int>> GetStaffIdByUsername(string username)
		{
			try
			{
				int staffId = await _staffService.getStaffIdByStaffUsername(username);
				return Ok(staffId);
			}
			catch (Exception)
			{
				return NotFound(new { message = "Staff not found by username" });
			}
		}

		[HttpGet("getByUsername/{username}")]
		public async Task<ActionResult<Staff>> getStaffByUsername(string username)
		{
			return await _staffService.getStaffByUsername(username);
		}
	}
}
