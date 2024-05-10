using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.DTO
{
    public class EmployeeRolesDTO
    {
        public bool IsManagement { get; set; }
        public DateTime StartRole { get; set; }
        public int RoleId { get; set; }
    }
}
