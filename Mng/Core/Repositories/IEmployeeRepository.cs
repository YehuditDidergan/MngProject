using Mng.Core.DTO;
using Mng.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Repositories
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetAll();
        Task<Employee> GetById(int id);
        Task<bool> Add(Employee employee);
        Task<bool> Update(Employee employee);
        Task<bool> Remove(int id);
    }
}
