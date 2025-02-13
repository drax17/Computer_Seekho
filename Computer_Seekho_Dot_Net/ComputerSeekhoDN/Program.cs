using Microsoft.EntityFrameworkCore;
using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Services;
using ComputerSeekhoDN.Repositories;
using ComputerSeekhoDN.Models;
using Microsoft.AspNetCore.Cors.Infrastructure;
using ComputerSeekhoDN.Exceptions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Configure MySQL Database Connection
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ComputerSeekhoDBContext>(options =>
	options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Register your service dependencies
builder.Services.AddScoped<IStaffService, StaffService>();
builder.Services.AddScoped<IEnquiryService, EnquiryService>();


// Enable Swagger for API documentation (optional)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Global Exception Handling
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

var app = builder.Build();

// Enable middleware for error handling during development
if (app.Environment.IsDevelopment())
{
	app.UseDeveloperExceptionPage();
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseExceptionHandler( _ => { });
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();