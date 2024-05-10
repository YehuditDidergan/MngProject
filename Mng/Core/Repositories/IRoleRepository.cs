using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Repositories
{
    public interface IRoleRepository
    {
        Task<IEnumerable<Role>> GetAll();
        
    }
}
