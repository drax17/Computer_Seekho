using Microsoft.EntityFrameworkCore;
using ComputerSeekhoDN.Models;
using ComputerSeekhoDN.Services;
using ComputerSeekhoDN.Repositories;
using ComputerSeekhoDN.Exceptions;
using Computer_Seekho_DN.Service;
using ComputerSeekho.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Configure MySQL Database Connection
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ComputerSeekhoDBContext>(options =>
	options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Register your service dependencies
builder.Services.AddScoped<IAlbumService, AlbumService>();
builder.Services.AddScoped<IBatchService, BatchService>();
builder.Services.AddScoped<IClosureReasonService, ClosureReasonService>();
builder.Services.AddScoped<ICourseService, CourseService>();
builder.Services.AddScoped<IEnquiryService, EnquiryService>();
builder.Services.AddScoped<IGetInTouchService, GetInTouchService>();
builder.Services.AddScoped<IImageService, ImageService>();
builder.Services.AddScoped<IPaymentService, PaymentService>();
builder.Services.AddScoped<IPaymentTypeService, PaymentTypeService>();
builder.Services.AddScoped<IStaffService, StaffService>();
builder.Services.AddScoped<IRecruiterService, RecruiterService>();
builder.Services.AddScoped<IVideoService, VideoService>();


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