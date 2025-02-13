using ComputerSeekhoDN.DTO;
using ComputerSeekhoDN.Exceptions;
using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ComputerSeekhoDN.Services
{
	public class PaymentService : IPaymentService
	{
		private readonly ComputerSeekhoDBContext context;
		public PaymentService(ComputerSeekhoDBContext context){ this.context = context; }

		public async Task addPayment(Payment payment)
		{
			var student = payment.Student;
			if (student.PaymentDue - payment.Amount < 0)
			{
				throw new ArgumentException("Invalid Amount");
			}
			student.PaymentDue -= payment.Amount;
			await context.Payments.AddAsync(payment);
			context.Students.Entry(student).State = EntityState.Modified;
			await context.SaveChangesAsync();
		}

		public async Task<IEnumerable<Payment>> getAllPayment()
		{
			var paymentList = await context.Payments.ToListAsync();
			if(paymentList.Count == 0) throw new NotFound($"No Payment record");
			return paymentList;
		}

		public async Task<Payment> getPaymentById(int paymentId)
		{
			var payment = await context.Payments.FindAsync(paymentId);
			return payment ?? throw new NotFound($"No payment with Id: {paymentId} exists.");
		}

		//
		//Baaki hai to get PaymentDTO
		//
		public async Task<PaymentDTO> getPaymentDTO(int paymentId)
		{
			var payment = await context.Payments.Include(s => s.Student).Include(pt => pt.PaymentType).FirstOrDefaultAsync();
			var paymentDTO = new PaymentDTO(payment.Student.StudentName, payment.Student.StudentEmail, payment.Amount, payment.PaymentDate, payment.PaymentType.PaymentTypeDesc);
			return paymentDTO;
		}
	}
}
