using ComputerSeekhoDN.DTO;
using ComputerSeekhoDN.Models;

namespace ComputerSeekhoDN.Services
{
	public interface IPaymentService
	{
		Task<Payment> getPaymentById(int paymentId);
		Task<IEnumerable<Payment>> getAllPayment();
		Task addPayment(Payment payment);
		Task<PaymentDTO> getPaymentDTO(int paymentId);
	}
}
