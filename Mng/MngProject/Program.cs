using Microsoft.OpenApi.Models;
using Mng.Api;
using Mng.Core;
using Mng.Core.Repositories;
using Mng.Core.Services;
using Mng.Data;
using Mng.Data.Repositories;
using Mng.Services;
using System.Text.Json.Serialization;
using Microsoft.Extensions.DependencyInjection;


var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
// Add services to the container.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IRoleService, RoleService>();
builder.Services.AddScoped<IRoleRepository, RoleRepository>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddAutoMapper(typeof(MappingDTO), typeof(MappingModel));


// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy",
        policy =>
        {
            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

// Enable CORS
app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
