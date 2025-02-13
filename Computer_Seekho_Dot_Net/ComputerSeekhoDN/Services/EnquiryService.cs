using ComputerSeekhoDN.Exceptions;
using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Data;

namespace ComputerSeekhoDN.Services
{
	public class EnquiryService : IEnquiryService
	{
		private readonly ComputerSeekhoDBContext csdbContext;

		public EnquiryService(ComputerSeekhoDBContext csdbContext)
		{
			this.csdbContext = csdbContext;
		}

		public async Task<Enquiry> addEnquiry(Enquiry enquiry)
		{
			csdbContext.Add(enquiry);
			await csdbContext.SaveChangesAsync();
			return enquiry;
		}

		public async Task<bool> deactivateEnquiry(string closureReasonDesc, int enquiryId)
		{
			Enquiry enquiry = csdbContext.Enquiries.Find(enquiryId);
			if (enquiry == null)
			{
				throw new NotFound($"Enquiry with Id: {enquiryId} does not exists");
			}
			enquiry.EnquiryIsActive = false;
			csdbContext.Entry(enquiry).State = EntityState.Modified;
			await csdbContext.SaveChangesAsync();
			return true;
		}

		public async Task<bool> deleteEnquiry(int enquiryId)
		{
			Enquiry enquiry = await csdbContext.Enquiries.FindAsync(enquiryId);
			if (enquiry == null)
			{
				throw new NotFound($"Enquiry not found with id: {enquiryId}");
			}
			csdbContext.Enquiries.Remove(enquiry);
			await csdbContext.SaveChangesAsync();
			return true;
		}

		public async Task<ActionResult<IEnumerable<Enquiry>>> getAllEnquiries()
		{
			return await csdbContext.Enquiries.ToListAsync();
		}

		public async Task<ActionResult<IEnumerable<Enquiry>>> getbystaff(string staffUsername)
		{
			Staff staff = await csdbContext.Staff.FirstOrDefaultAsync(staff => staff.StaffUsername == staffUsername);
			if (staff == null)
			{
				throw new NotFound($"Enquiries for staff with username: {staffUsername} do not exist");
			}
			int staffId = staff.StaffId;
			return await csdbContext.Enquiries.Where(e => e.StaffId == staffId).ToListAsync();
		}

		public Task<ActionResult<IEnumerable<Enquiry>>> getEnquiryByDate(DateOnly enquiryDate)
		{
			throw new NotImplementedException();
		}

		public async Task<ActionResult<Enquiry>> getEnquiryById(int enquiryId)
		{
			var foundEnquiry = await csdbContext.Enquiries.FindAsync(enquiryId);
			if (foundEnquiry == null)
			{
				throw new NotFound($"Enquiry Not Found with Id: {enquiryId}");				
			}
			return foundEnquiry;
		}

		public Task<int> updateEnquirerQuery(string enquirerQuery, int enquiryId)
		{
			throw new NotImplementedException();
		}

		public async Task<bool> updateEnquiry(Enquiry enquiry)
		{
			int enquiryId = enquiry.EnquiryId;
			csdbContext.Entry(enquiry).State = EntityState.Modified;
			try
			{
				await csdbContext.SaveChangesAsync();
			}
			catch (DBConcurrencyException ex)
			{
				if (!enquiryExists(enquiryId))
				{
					throw new NotFound($"Enquiry with Id: {enquiryId} does not exists");
				}
				else
				{
					Console.WriteLine(ex.Message);
					throw;
				}
			}
			return true;
		}

		private bool enquiryExists(int id)
		{
			return csdbContext.Enquiries.Find(id) != null;
		}
	}
}
