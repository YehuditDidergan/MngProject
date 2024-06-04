using Microsoft.EntityFrameworkCore;
using Mng.Core;
using Mng.Core.DTO;
using Mng.Core.Entities;
using Mng.Core.Repositories;

namespace Mng.Data.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;

        public EmployeeRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _context.employees.Where(e => e.Status).Include(e => e.EmployeeRoles).ToListAsync();
        }

        public async Task<Employee> GetById(int id)
        {
            return await _context.employees.Where(e => e.Id == id && e.Status).Include(em => em.EmployeeRoles).FirstOrDefaultAsync();
        }

        public async Task<bool> Add(Employee employee)
        {
            var b = employee.EmployeeRoles.FirstOrDefault(e => e.StartRole > employee.StartDate);
            if (b != null) return false;
            var rolesForEmployee = employee.EmployeeRoles
                                   .Where(er => er.EmployeeId == employee.Id)
                                   .ToList();
            var duplicateRole = rolesForEmployee
                .GroupBy(er => er.RoleId)
                .Any(g => g.Count() > 1);
            if (duplicateRole) return false; 
            await _context.employees.AddAsync(employee);
            await _context.SaveChangesAsync();
            return true;
        }
        //יש לבצע גם עבור PUT
        public async Task<bool> Update(Employee employee)
        {
            var existEmployee = await GetById(employee.Id);
            if (existEmployee == null) { return false; }//not found
            var b = existEmployee.EmployeeRoles.FirstOrDefault(e => e.StartRole > employee.StartDate);
            if (b != null) return false;//
            var duplicateRole = existEmployee.EmployeeRoles.ToList()
                .GroupBy(er => er.RoleId)
                .Any(g => g.Count() > 1);
            if (duplicateRole) return false;//
            _context.Entry(existEmployee).CurrentValues.SetValues(existEmployee);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Remove(int id)
        {
            var emp = await _context.employees.FindAsync(id);
            if (emp != null)
            {
                emp.Status = false;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

    }
}
