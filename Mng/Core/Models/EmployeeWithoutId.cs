using Mng.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Models
{
    public class EmployeeWithoutId
    {
        public string FirstName { get; set; }
       
        public string LastName { get; set; }

        public string TZ { get; set; }
       
        public DateTime BirthDate { get; set; }
        
        public bool IsMale { get; set; } //Gender
       
        public DateTime StartDate { get; set; }
        
        public bool Status { get; set; }
        public IEnumerable<EmployeeRoles> EmployeeRoles { get; set; }

    }
}
