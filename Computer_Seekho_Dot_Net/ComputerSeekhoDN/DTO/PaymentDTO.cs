namespace ComputerSeekhoDN.DTO
{
	public class PaymentDTO
	{
		private string StudentName { get; set; }
		private string StudentEmail {  get; set; }
		private double Amount {  get; set; }
		private DateOnly PaymentDate {  get; set; }
		private string PaymentTypeDesc {  get; set; }

		public PaymentDTO(string studentName, string studentEmail, double amount, DateOnly paymentDate, string paymentTypeDesc)
		{
			this.StudentName = studentName;
			this.StudentEmail = studentEmail;
			this.Amount = amount;
			this.PaymentDate = paymentDate;
			this.PaymentTypeDesc = paymentTypeDesc;
		}
	}
}
