using ComputerSeekhoDN.Models;
using Microsoft.AspNetCore.Mvc;

namespace ComputerSeekhoDN.Services
{
	public interface IEnquiryService
	{
		Task<ActionResult<Enquiry>> getEnquiryById(int enquiryId);
		Task<ActionResult<IEnumerable<Enquiry>>> getAllEnquiries();
		Task<Enquiry> addEnquiry(Enquiry enquiry);
		Task<bool> updateEnquiry(Enquiry enquiry);
		Task<bool> deleteEnquiry(int enquiryId);
		Task<ActionResult<IEnumerable<Enquiry>>> getEnquiryByDate(DateOnly enquiryDate);
		Task<ActionResult<IEnumerable<Enquiry>>> getbystaff(String staffUsername);
		Task<int> updateEnquirerQuery(String enquirerQuery, int enquiryId);
		Task<bool> deactivateEnquiry(String closureReasonDesc, int enquiryId);
	}
}
