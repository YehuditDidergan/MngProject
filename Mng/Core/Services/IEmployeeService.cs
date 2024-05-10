using Mng.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Services
{
    public interface IEmployeeService
    {
        Task<IEnumerable<Employee>> GetAll();
        Task<Employee> GetById(int id);
        Task<bool> Add(Employee employee);
        Task<bool> Update(int id, Employee employee);
       
        //void Delete(int id);
    }
}
