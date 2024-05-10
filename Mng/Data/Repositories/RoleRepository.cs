using Microsoft.EntityFrameworkCore;
using Mng.Core;
using Mng.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Data.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _dataContext;
        public RoleRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<IEnumerable<Role>> GetAll()
        {
            return await _dataContext.roles.Include(r => r.EmployeeRoles).ToListAsync();
        }
    }
}
