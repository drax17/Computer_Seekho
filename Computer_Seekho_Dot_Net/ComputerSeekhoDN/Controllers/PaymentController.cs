using ComputerSeekhoDN.DTO;
using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ComputerSeekhoDN.Controllers
{
	[Route("api/payment")]
	[ApiController]
	public class PaymentController : ControllerBase
	{
		private readonly IPaymentService service;
		public PaymentController(IPaymentService service) { this.service = service; }

		[HttpGet("all")]
		public async Task<ActionResult<IEnumerable<Payment>>> AllPayemnts() {
			return Ok(await service.getAllPayment());
		}

		[HttpGet("getById/{id}")]
		public async Task<ActionResult<Payment>> getById(int id)
		{
			return Ok(await service.getPaymentById(id));
		}

		[HttpGet("dto/{id}")]
		public async Task<ActionResult<PaymentDTO>> getDto(int id)
		{
			return Ok(await service.getPaymentDTO(id));
		}
	}
}
