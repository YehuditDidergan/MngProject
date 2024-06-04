using AutoMapper;
using Mng.Core;
using Mng.Core.DTO;
using Mng.Core.Models;
using Mng.Core.Repositories;
using Mng.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        public async Task<bool> Add(Employee employee)
        {
            return await _employeeRepository.Add(employee);
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _employeeRepository.GetAll();
        }

        public async Task<Employee> GetById(int id)
        {
            return await _employeeRepository.GetById(id);
        }

        public async Task<bool> Remove(int id)
        {
            return await _employeeRepository.Remove(id);
        }

        public async Task<bool> Update(Employee employee)
        {
            return await _employeeRepository.Update(employee);
        }
       
    }
}
