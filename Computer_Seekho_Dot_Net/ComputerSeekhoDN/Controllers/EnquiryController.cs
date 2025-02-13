using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ComputerSeekhoDN.Controllers
{
	[Route("api/enquiry")]
	[ApiController]
	public class EnquiryController : ControllerBase
	{
		private readonly IEnquiryService enquiryService;
		public EnquiryController(IEnquiryService enquiryService)
		{
			this.enquiryService = enquiryService;
		}

		[HttpGet("all")]
		public async Task<ActionResult<IEnumerable<Enquiry>>> GetAll() {
			return await enquiryService.getAllEnquiries();
		}

		[HttpGet("getById/{id}")]
		public async Task<ActionResult<Enquiry>> getById(int id)
		{
			var enquiry = await enquiryService.getEnquiryById(id);
			return Ok(enquiry);
		}

		[HttpPost("add")]
		public async Task<ActionResult<Enquiry>> addEnquiry([FromBody] Enquiry enquiry)
		{
			if (enquiry == null)
			{
				return BadRequest(new { message = "Invalid enquiry data" });
			}

			var newEnquiry = await enquiryService.addEnquiry(enquiry);
			return CreatedAtAction(nameof(getById), new { id = newEnquiry.EnquiryId }, newEnquiry);
		}

		[HttpPut("update")]
		public async Task<ActionResult<bool>> updateEnquiry([FromBody] Enquiry enquiry)
		{
			bool isUpdated = await enquiryService.updateEnquiry(enquiry);
			if (!isUpdated)
			{
				return NotFound(new { message = "No Enquiry Found"});
			}
			return Ok(new {message = "Enquiry Updated"});
		}
	}
}
