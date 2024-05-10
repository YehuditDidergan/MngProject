using Microsoft.EntityFrameworkCore;
using Mng.Core;
using Mng.Core.DTO;
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
            return await _context.employees.Include(e => e.EmployeeRoles).ToListAsync();
        }

        public async Task<Employee> GetById(int id)
        {
            return await _context.employees.Where(e => e.Id == id).Include(em => em.EmployeeRoles).FirstOrDefaultAsync();
        }

        public async Task<bool> Add(Employee employee)
        {
            await _context.employees.AddAsync(employee);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Update(int id, Employee employee)
        {
            var emp = await _context.employees.FindAsync(id);
            _context.Entry(emp).CurrentValues.SetValues(emp);
            await _context.SaveChangesAsync();
            return true;
            //if (employee != null)
            //{
            //    emp.FirstName = employee.FirstName;
            //    emp.LastName = employee.LastName;
            //    emp.IsMale = employee.IsMale;
            //    emp.StartDate = employee.StartDate;
            //    emp.TZ = employee.TZ;
            //    emp.BirthDate = employee.BirthDate;
            //    emp.Status = employee.Status;
            //    await _context.SaveChangesAsync();
            //}
            //return true;
        }

        //public void Delete(int id)
        //{
        //    var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
        //    _context.Employees.Remove(employee);
        //}

    }
}
